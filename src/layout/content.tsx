import * as React from "react";

function Content({ children }: React.PropsWithChildren) {
  return <main>{children}</main>;
}

export default Content;
