abstract class FeedbackEvent {
  public defaultPrevented: boolean = false;
  abstract onError(err: any): void;
  preventDefault() {
    this.defaultPrevented = true;
  }
}

export class FeedbackSender {
  private feedback: boolean = true;
  public setFeedback(feedback: boolean): this {
    this.feedback = feedback;
    return this;
  }
  execute(): this {
    class FeedbackEventImpl extends FeedbackEvent {
      onError(err: any) {
        console.error(err);
      }
    }
    this.sendFeedback(new FeedbackEventImpl());
    return this;
  }
  private sendFeedback(evt: FeedbackEvent) {
    if (!this.feedback) {
      evt.preventDefault();
      evt.onError('FEEDBACK PREVENTED');
    }
  }
}
