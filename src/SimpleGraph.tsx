import React, { useEffect, useRef } from "react";
import RelationGraph, { RelationGraphInstance } from "relation-graph/react";
import type { MutableRefObject } from "react";
import type {
  RGLine,
  RGLink,
  RGNode,
  RGNodeSlotProps,
  RGOptions,
  RelationGraphExpose,
} from "relation-graph/react";

const staticJsonData = {
  nodes: [
    {
      id: "0",
      text: "",
      data: { event: true },
      opacity: "0",
      width: "0",
      height: "0",
    },
    { id: "1", color: "#00CDBA", data: { event: true }, text: "初音未來" },
    { id: "2", color: "#00CDBA", data: { event: false }, text: "鏡音鈴" },
    { id: "3", color: "#00CDBA", data: { event: false }, text: "鏡音連" },
    { id: "4", color: "#00CDBA", data: { event: false }, text: "巡音流歌" },
    { id: "5", color: "#00CDBA", data: { event: false }, text: "MEIKO" },
    { id: "6", color: "#00CDBA", data: { event: false }, text: "KAITO" },
    { id: "7", color: "#4455DD", data: { event: false }, text: "星乃一歌" },
    { id: "8", color: "#4455DD", data: { event: false }, text: "天馬咲希" },
    { id: "9", color: "#4455DD", data: { event: false }, text: "望月穗波" },
    { id: "10", color: "#4455DD", data: { event: false }, text: "日野森志步" },
    { id: "11", color: "#6CCB20", data: { event: true }, text: "花里實乃理" },
    { id: "12", color: "#6CCB20", data: { event: true }, text: "桐谷遙" },
    { id: "13", color: "#6CCB20", data: { event: true }, text: "桃井愛莉" },
    { id: "14", color: "#6CCB20", data: { event: true }, text: "日野森雫" },
    { id: "15", color: "#EE1166", data: { event: false }, text: "小豆澤心羽" },
    { id: "16", color: "#EE1166", data: { event: false }, text: "白石杏" },
    { id: "17", color: "#EE1166", data: { event: false }, text: "東雲彰人" },
    { id: "18", color: "#EE1166", data: { event: false }, text: "青柳冬彌" },
    { id: "19", color: "#FF9900", data: { event: false }, text: "天馬司" },
    { id: "20", color: "#FF9900", data: { event: false }, text: "鳳笑夢" },
    { id: "21", color: "#FF9900", data: { event: false }, text: "草薙寧寧" },
    { id: "22", color: "#FF9900", data: { event: false }, text: "神代類" },
    { id: "23", color: "#884499", data: { event: false }, text: "宵崎奏" },
    { id: "24", color: "#884499", data: { event: false }, text: "朝比奈真冬" },
    { id: "25", color: "#884499", data: { event: false }, text: "東雲繪名" },
    { id: "26", color: "#884499", data: { event: false }, text: "曉山瑞希" },
  ],
  lines: [
    { from: "0", to: "1", isHideArrow: true, isHide: true },
    { from: "0", to: "2", isHideArrow: true, isHide: true },
    { from: "0", to: "3", isHideArrow: true, isHide: true },
    { from: "0", to: "4", isHideArrow: true, isHide: true },
    { from: "0", to: "5", isHideArrow: true, isHide: true },
    { from: "0", to: "6", isHideArrow: true, isHide: true },
    { from: "0", to: "7", isHideArrow: true, isHide: true },
    { from: "0", to: "8", isHideArrow: true, isHide: true },
    { from: "0", to: "9", isHideArrow: true, isHide: true },
    { from: "0", to: "10", isHideArrow: true, isHide: true },
    { from: "0", to: "11", isHideArrow: true, isHide: true },
    { from: "0", to: "12", isHideArrow: true, isHide: true },
    { from: "0", to: "13", isHideArrow: true, isHide: true },
    { from: "0", to: "14", isHideArrow: true, isHide: true },
    { from: "0", to: "15", isHideArrow: true, isHide: true },
    { from: "0", to: "16", isHideArrow: true, isHide: true },
    { from: "0", to: "17", isHideArrow: true, isHide: true },
    { from: "0", to: "18", isHideArrow: true, isHide: true },
    { from: "0", to: "19", isHideArrow: true, isHide: true },
    { from: "0", to: "20", isHideArrow: true, isHide: true },
    { from: "0", to: "21", isHideArrow: true, isHide: true },
    { from: "0", to: "22", isHideArrow: true, isHide: true },
    { from: "0", to: "23", isHideArrow: true, isHide: true },
    { from: "0", to: "24", isHideArrow: true, isHide: true },
    { from: "0", to: "25", isHideArrow: true, isHide: true },
    { from: "0", to: "26", isHideArrow: true, isHide: true },
    { from: "1", to: "2", isHideArrow: true },
    { from: "1", to: "3", isHideArrow: true },
    { from: "1", to: "4", isHideArrow: true },
    { from: "1", to: "5", isHideArrow: true },
    { from: "1", to: "6", isHideArrow: true },
    { from: "1", to: "7", isHideArrow: true },
    { from: "1", to: "8", isHideArrow: true },
    { from: "1", to: "9", isHideArrow: true },
    { from: "1", to: "10", isHideArrow: true },
    { from: "1", to: "11", isHideArrow: true },
    { from: "1", to: "12", isHideArrow: true },
    { from: "1", to: "13", isHideArrow: true },
    { from: "1", to: "14", isHideArrow: true },
    { from: "1", to: "15", isHideArrow: true },
    { from: "1", to: "16", isHideArrow: true },
    { from: "1", to: "17", isHideArrow: true },
    { from: "1", to: "18", isHideArrow: true },
    { from: "1", to: "19", isHideArrow: true },
    { from: "1", to: "20", isHideArrow: true },
    { from: "1", to: "21", isHideArrow: true },
    { from: "1", to: "22", isHideArrow: true },
    { from: "1", to: "23", isHideArrow: true },
    { from: "1", to: "24", isHideArrow: true },
    { from: "1", to: "25", isHideArrow: true },
    { from: "1", to: "26", isHideArrow: true },
    { from: "2", to: "3", isHideArrow: true },
    { from: "2", to: "4", isHideArrow: true },
    { from: "2", to: "5", isHideArrow: true },
    { from: "2", to: "6", isHideArrow: true },
    { from: "2", to: "7", isHideArrow: true },
    { from: "2", to: "8", isHideArrow: true },
    { from: "2", to: "10", isHideArrow: true },
    { from: "2", to: "11", isHideArrow: true },
    { from: "2", to: "12", isHideArrow: true },
    { from: "2", to: "13", isHideArrow: true },
    { from: "2", to: "14", isHideArrow: true },
    { from: "2", to: "15", isHideArrow: true },
    { from: "2", to: "16", isHideArrow: true },
    { from: "2", to: "17", isHideArrow: true },
    { from: "2", to: "18", isHideArrow: true },
    { from: "2", to: "21", isHideArrow: true },
    { from: "2", to: "23", isHideArrow: true },
    { from: "2", to: "24", isHideArrow: true },
    { from: "2", to: "25", isHideArrow: true },
    { from: "2", to: "26", isHideArrow: true },
    { from: "3", to: "4", isHideArrow: true },
    { from: "3", to: "5", isHideArrow: true },
    { from: "3", to: "6", isHideArrow: true },
    { from: "3", to: "9", isHideArrow: true },
    { from: "3", to: "13", isHideArrow: true },
    { from: "3", to: "15", isHideArrow: true },
    { from: "3", to: "16", isHideArrow: true },
    { from: "3", to: "17", isHideArrow: true },
    { from: "3", to: "19", isHideArrow: true },
    { from: "3", to: "20", isHideArrow: true },
    { from: "3", to: "22", isHideArrow: true },
    { from: "3", to: "23", isHideArrow: true },
    { from: "3", to: "24", isHideArrow: true },
    { from: "3", to: "26", isHideArrow: true },
    { from: "4", to: "5", isHideArrow: true },
    { from: "4", to: "6", isHideArrow: true },
    { from: "4", to: "7", isHideArrow: true },
    { from: "4", to: "8", isHideArrow: true },
    { from: "4", to: "9", isHideArrow: true },
    { from: "4", to: "10", isHideArrow: true },
    { from: "4", to: "11", isHideArrow: true },
    { from: "4", to: "14", isHideArrow: true },
    { from: "4", to: "15", isHideArrow: true },
    { from: "4", to: "16", isHideArrow: true },
    { from: "4", to: "17", isHideArrow: true },
    { from: "4", to: "18", isHideArrow: true },
    { from: "4", to: "19", isHideArrow: true },
    { from: "4", to: "21", isHideArrow: true },
    { from: "4", to: "22", isHideArrow: true },
    { from: "4", to: "23", isHideArrow: true },
    { from: "4", to: "24", isHideArrow: true },
    { from: "4", to: "25", isHideArrow: true },
    { from: "4", to: "26", isHideArrow: true },
    { from: "5", to: "9", isHideArrow: true },
    { from: "5", to: "10", isHideArrow: true },
    { from: "5", to: "12", isHideArrow: true },
    { from: "5", to: "13", isHideArrow: true },
    { from: "5", to: "15", isHideArrow: true },
    { from: "5", to: "16", isHideArrow: true },
    { from: "5", to: "17", isHideArrow: true },
    { from: "5", to: "18", isHideArrow: true },
    { from: "5", to: "20", isHideArrow: true },
    { from: "5", to: "21", isHideArrow: true },
    { from: "5", to: "25", isHideArrow: true },
    { from: "5", to: "26", isHideArrow: true },
    { from: "6", to: "7", isHideArrow: true },
    { from: "6", to: "8", isHideArrow: true },
    { from: "6", to: "10", isHideArrow: true },
    { from: "6", to: "11", isHideArrow: true },
    { from: "6", to: "12", isHideArrow: true },
    { from: "6", to: "14", isHideArrow: true },
    { from: "6", to: "15", isHideArrow: true },
    { from: "6", to: "17", isHideArrow: true },
    { from: "6", to: "18", isHideArrow: true },
    { from: "6", to: "19", isHideArrow: true },
    { from: "6", to: "20", isHideArrow: true },
    { from: "6", to: "21", isHideArrow: true },
    { from: "6", to: "22", isHideArrow: true },
    { from: "6", to: "23", isHideArrow: true },
    { from: "6", to: "24", isHideArrow: true },
    { from: "7", to: "8", isHideArrow: true },
    { from: "7", to: "9", isHideArrow: true },
    { from: "7", to: "10", isHideArrow: true },
    { from: "7", to: "11", isHideArrow: true },
    { from: "7", to: "12", isHideArrow: true },
    { from: "7", to: "14", isHideArrow: true },
    { from: "7", to: "15", isHideArrow: true },
    { from: "7", to: "19", isHideArrow: true },
    { from: "7", to: "21", isHideArrow: true },
    { from: "7", to: "23", isHideArrow: true },
    { from: "7", to: "24", isHideArrow: true },
    { from: "8", to: "9", isHideArrow: true },
    { from: "8", to: "10", isHideArrow: true },
    { from: "8", to: "11", isHideArrow: true },
    { from: "8", to: "12", isHideArrow: true },
    { from: "8", to: "13", isHideArrow: true },
    { from: "8", to: "14", isHideArrow: true },
    { from: "8", to: "18", isHideArrow: true },
    { from: "8", to: "19", isHideArrow: true },
    { from: "8", to: "20", isHideArrow: true },
    { from: "9", to: "10", isHideArrow: true },
    { from: "9", to: "12", isHideArrow: true },
    { from: "9", to: "14", isHideArrow: true },
    { from: "9", to: "19", isHideArrow: true },
    { from: "9", to: "20", isHideArrow: true },
    { from: "9", to: "23", isHideArrow: true },
    { from: "9", to: "25", isHideArrow: true },
    { from: "10", to: "11", isHideArrow: true },
    { from: "10", to: "12", isHideArrow: true },
    { from: "10", to: "13", isHideArrow: true },
    { from: "10", to: "14", isHideArrow: true },
    { from: "10", to: "15", isHideArrow: true },
    { from: "10", to: "19", isHideArrow: true },
    { from: "11", to: "12", isHideArrow: true },
    { from: "11", to: "13", isHideArrow: true },
    { from: "11", to: "14", isHideArrow: true },
    { from: "11", to: "15", isHideArrow: true },
    { from: "11", to: "16", isHideArrow: true },
    { from: "11", to: "19", isHideArrow: true },
    { from: "11", to: "23", isHideArrow: true },
    { from: "12", to: "13", isHideArrow: true },
    { from: "12", to: "14", isHideArrow: true },
    { from: "12", to: "15", isHideArrow: true },
    { from: "12", to: "16", isHideArrow: true },
    { from: "12", to: "20", isHideArrow: true },
    { from: "13", to: "14", isHideArrow: true },
    { from: "13", to: "15", isHideArrow: true },
    { from: "13", to: "16", isHideArrow: true },
    { from: "13", to: "17", isHideArrow: true },
    { from: "13", to: "20", isHideArrow: true },
    { from: "13", to: "25", isHideArrow: true },
    { from: "13", to: "26", isHideArrow: true },
    { from: "14", to: "15", isHideArrow: true },
    { from: "14", to: "16", isHideArrow: true },
    { from: "14", to: "19", isHideArrow: true },
    { from: "14", to: "24", isHideArrow: true },
    { from: "14", to: "25", isHideArrow: true },
    { from: "14", to: "26", isHideArrow: true },
    { from: "15", to: "16", isHideArrow: true },
    { from: "15", to: "17", isHideArrow: true },
    { from: "15", to: "18", isHideArrow: true },
    { from: "15", to: "19", isHideArrow: true },
    { from: "16", to: "17", isHideArrow: true },
    { from: "16", to: "18", isHideArrow: true },
    { from: "16", to: "21", isHideArrow: true },
    { from: "16", to: "26", isHideArrow: true },
    { from: "17", to: "18", isHideArrow: true },
    { from: "17", to: "19", isHideArrow: true },
    { from: "17", to: "21", isHideArrow: true },
    { from: "17", to: "22", isHideArrow: true },
    { from: "17", to: "25", isHideArrow: true },
    { from: "17", to: "26", isHideArrow: true },
    { from: "18", to: "19", isHideArrow: true },
    { from: "18", to: "21", isHideArrow: true },
    { from: "18", to: "22", isHideArrow: true },
    { from: "18", to: "26", isHideArrow: true },
    { from: "19", to: "20", isHideArrow: true },
    { from: "19", to: "21", isHideArrow: true },
    { from: "19", to: "22", isHideArrow: true },
    { from: "19", to: "26", isHideArrow: true },
    { from: "20", to: "21", isHideArrow: true },
    { from: "20", to: "22", isHideArrow: true },
    { from: "20", to: "24", isHideArrow: true },
    { from: "20", to: "25", isHideArrow: true },
    { from: "21", to: "22", isHideArrow: true },
    { from: "22", to: "26", isHideArrow: true },
    { from: "23", to: "24", isHideArrow: true },
    { from: "23", to: "25", isHideArrow: true },
    { from: "23", to: "26", isHideArrow: true },
    { from: "24", to: "25", isHideArrow: true },
    { from: "24", to: "26", isHideArrow: true },
    { from: "25", to: "26", isHideArrow: true },
    { from: "26", to: "25", isHideArrow: true },
  ],
};

const NodeSlot: React.FC<RGNodeSlotProps> = ({ node }) => {
  console.log("NodeSlot:");
  return (
    <div style={{ lineHeight: "80px", textAlign: "center" }}>
      <span>{node.text}</span>
    </div>
  );
};
const SimpleGraph: React.FC = () => {
  const graphRef = useRef() as MutableRefObject<RelationGraphExpose>;
  useEffect(() => {
    drawGraph();
  }, []);
  const drawGraph = async () => {
    await graphRef.current.setJsonData(staticJsonData, (graphInstance) => {});
    doFilter();
    doCount();
    doAutoLayout();
  };
  const doFilter = () => {
    const graphInstance = graphRef.current?.getInstance();
    const _all_nodes = graphInstance?.getNodes() || [];
    _all_nodes.forEach((thisNode) => {
      let _isHideThisNode = true;
      if (thisNode.data!["event"] == true) {
        _isHideThisNode = false;
      }
      thisNode.isHide = _isHideThisNode;
    });
    graphInstance?.dataUpdated();
  };
  const doCount = () => {
    const graphInstance = graphRef.current?.getInstance();
    const _all_nodes = graphInstance?.getNodes() || [];
    _all_nodes.forEach((nodeA) => {
      let count = 0;
      if (nodeA.data!["event"] == true) {
        const connectedNodes = nodeA.targetNodes || [];
        connectedNodes.forEach((nodeB) => {
          if (nodeB.data!["event"] == true) {
            count++;
          }
        });
      }
      nodeA.text = nodeA.text + "(" + (count - 1) + ")";
    });
  };
  const doAutoLayout = () => {
    const graphInstance = graphRef.current?.getInstance();
    setTimeout(async () => {
      await graphInstance.startAutoLayout();
    }, 500);
    graphInstance.moveToCenter();
  };
  const options: RGOptions = {
    debug: true,
    disableZoom: true,
    defaultLineShape: 1,
    defaultNodeShape: 0,
    defaultNodeWidth: 100,
    layout: {
      layoutName: "force",
    },
  };
  const onNodeClick = (node: RGNode, _e: MouseEvent | TouchEvent) => {
    console.log("onNodeClick:", node.text);
    return true;
  };
  const onLineClick = (
    line: RGLine,
    _link: RGLink,
    _e: MouseEvent | TouchEvent
  ) => {
    console.log("onLineClick:", line.text, line.from, line.to);
    return true;
  };

  return (
    <div>
      <div style={{ height: 600, width: 900, border: "#efefef solid 1px" }}>
        <RelationGraph
          ref={graphRef}
          options={options}
          nodeSlot={NodeSlot}
          onNodeClick={onNodeClick}
          onLineClick={onLineClick}
        />
      </div>
    </div>
  );
};
export default SimpleGraph;
