import React, { Component } from "react";

class Share extends Component {
  render() {
    return (
      <div className="share">
        <div
          className="fb-share-button"
          data-href="http://www.geradordedesculpasdopt.com.br"
          data-layout="button_count"
          data-size="large"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.geradordedesculpasdopt.com.br%2F&amp;src=sdkpreparse"
            className="fb-xfbml-parse-ignore"
          >
            <span className="code-only">Facebook</span>
          </a>
        </div>
        <a
          href="https://twitter.com/share?ref_src=twsrc%5Etfw"
          className="twitter-share-button"
          data-size="large"
          data-hashtags="geradordedesculpasdopt"
          data-lang="pt"
          data-show-count="false"
        >
          <span className="code-only">Tweet</span>
        </a>
      </div>
    );
  }
}

export default Share;
