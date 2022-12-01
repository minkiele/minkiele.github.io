import { createElement, Fragment } from "react";
import { TransformOptions } from "react-markdown/lib/react-markdown";
import { Plugin } from 'unified';
import { visit } from 'unist-util-visit';
import { BuildVisitor } from "unist-util-visit/complex-types";
import { u } from 'unist-builder';

export const getMarkdownComponentsMap = (): NonNullable<TransformOptions['components']> => ({
  h1: () => createElement(Fragment),
});

const SUP_REGX = /\^([^^]+)\^/;

const getNewPositionOffsets = (value: string) => {
  let rows = 0;
  let lastNewLine = 0;
  for(let i = 0; i < value.length; i += 1) {
    if(value.charAt(i) === '\n') {
      rows += 1;
      lastNewLine = i;
    }
  }
  return { rows, column: value.length - lastNewLine }
};

const splitTextNode = (node: any, sep: string) => {
  const sepIndex = (node.value as string).indexOf(sep);
  const leftValue = (node.value as string).substring(0, sepIndex);
  const rightValue = (node.value as string).substring(sepIndex + 1);
  const { rows: leftRows, column: leftColumn } = getNewPositionOffsets(leftValue);
  const { rows: rightRows, column: rightColumn } = getNewPositionOffsets(rightValue);
  const leftPosition = {
    start: { ...node.position.start },
    end: {
      line: node.position.start.line + leftRows,
      column: leftColumn,
      offset: node.position.start.offset + leftValue.length
    }
  };
  const rightPosition = {
    start: {
      line: node.position.end.line - rightRows,
      // That's just wrong but maybe it works...
      column: rightColumn,
      offset: node.position.end.offset - rightValue.length
    },
    end: { ...node.position.end },
  };
  return [u('text', { value: leftValue, position: leftPosition }), u('text', { value: rightValue, position: rightPosition })];
};

const visitor: BuildVisitor = (node: any, index: number | null, parent: any) => {
  if((node.value as string).match(SUP_REGX)) {
    const [leftNode, rest] = splitTextNode(node, '^');
    const [sup, rightNode] = splitTextNode(rest, '^');
    parent.children.splice(index, 1, leftNode, u('sub', [sup]), rightNode);
    console.log(parent);
  }
};

export const sup: Plugin = () => (tree) => {
  visit(tree, 'text', visitor);
};
