import React from "react";
import { Card } from "antd";

function Home() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="Section 1" className="col-span-1">
          Content 1
        </Card>
        <Card title="Section 2" className="col-span-1">
          Content 2
        </Card>
        <Card title="Section 3" className="col-span-1">
          Content 3
        </Card>
        <Card title="Section 4" className="col-span-1">
          Content 4
        </Card>
        <Card title="Section 5" className="col-span-1">
          Content 5
        </Card>
        <Card title="Section 6" className="col-span-1">
          Content 6
        </Card>
      </div>
    </div>
  );
}

export default Home;
