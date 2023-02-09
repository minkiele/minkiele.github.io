import { Inconsolata, Noto_Emoji } from "@next/font/google";
import { GetStaticProps } from "next";
import { allLazyRouteComponents } from "./App";
import { LazyRouteComponent } from "./App.models";

export const getGetStaticProps = <L extends LazyRouteComponent>(
  route: string,
  staticProps?: Partial<L>
): GetStaticProps<LazyRouteComponent> => {
  const props = allLazyRouteComponents.find(
    (lazyRouteComponent) => lazyRouteComponent.route === route
  );
  if (props == null) {
    throw new Error("Route not found");
  }
  return () => ({
    props: { ...props, ...staticProps }
  });
};

export const inconsolata = Inconsolata({
  // If you don't add 900 as a weight 700 won't work... WTF
  weight: ['400', '700'],
  subsets: ["latin"]
});

export const notoEmoji = Noto_Emoji({
  subsets: ["emoji"]
});
