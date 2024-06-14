import { EyeOutlined } from "@ant-design/icons";
import { Space, Table, TableProps, Typography } from "antd";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setScanResult } from "../app/slices/domain.slice";

const ScanHistory = () => {
  const { scanHistory, showCard } = useAppSelector((state) => state.domain);
  const dispatch = useAppDispatch();
  const columns: TableProps<any>["columns"] = [
    {
      title: "Domain",
      dataIndex: "domain",
      key: "domain",
    },

    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <EyeOutlined
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(setScanResult(record))}
          />
        </Space>
      ),
    },
  ];
  if (showCard) {
    return null;
  }

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Typography.Title level={4}>Scan History</Typography.Title>
      <Table columns={columns} dataSource={scanHistory} />;
    </Space>
  );
};

export default ScanHistory;
