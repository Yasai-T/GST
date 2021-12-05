import { PageProps } from "gatsby";
import React, { VFC } from "react";

const IndexPage: VFC<PageProps> = () => {
  return (
    <div>
      <div className="hello">hello gatsby</div>
      <style jsx>{`
        .hello {
          color: red;
        }
      `}</style>
    </div>
  );
};

export default IndexPage;
