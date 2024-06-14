import { Card, Col, Row } from "antd";
import moment from "moment";
import { CloseOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setShowCard } from "../app/slices/domain.slice";

const ScanCard: React.FC = () => {
  const { scanResult, showCard } = useAppSelector((state) => state.domain);
  const dispatch = useAppDispatch();
  if (!scanResult || !showCard) return null;

  const { domain, start_time, end_time, data } = scanResult;
  const subdomains = data?.subdomains || [];

  return (
    <Card
      title="Scan results"
      extra={<CloseOutlined onClick={() => dispatch(setShowCard(false))} />}
      bordered={false}
    >
      <Row gutter={[16, 8]}>
        <Col span={4}>Domain:</Col>
        <Col span={20}>{domain}</Col>
        <Col span={4}>Start time:</Col>
        <Col span={20}>{moment(start_time).format("L LTS")}</Col>
        <Col span={4}>End time:</Col>
        <Col span={20}>{moment(end_time).format("L LTS")}</Col>
        <Col span={4}>Subdomains:</Col>
        {subdomains.length ? (
          subdomains.map((subdomain, index) => (
            <Col offset={index && 4} span={20}>
              {subdomain}
            </Col>
          ))
        ) : (
          <Col span={20}>No subdomains found</Col>
        )}
      </Row>
    </Card>
  );
};

export default ScanCard;
