import ScanInput from "./components/ScanInput";
import ScanCard from "./components/ScanCard";
import { Col, Row } from "antd";
import ScanHistory from "./components/ScanHistory";

function App() {
  return (
    <div className="container-wrapper">
      <ScanInput />
      <Row style={{ width: "100%" }}>
        <Col
          span={24}
          lg={{ span: 18, offset: 3 }}
          xxl={{ span: 12, offset: 6 }}
        >
          <ScanCard />
        </Col>
        <Col
          span={24}
          lg={{ span: 18, offset: 3 }}
          xxl={{ span: 12, offset: 6 }}
        >
          <ScanHistory />
        </Col>
      </Row>
    </div>
  );
}

export default App;
