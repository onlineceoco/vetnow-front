import chartSectionStyle from "./ChartSection.module.css";
import React from "react";
import LineCharts from "./lineCharts";
import PieChart from "./pieChart";

export default function ChartSection() {
  return (
    <div className={chartSectionStyle["sectionMain"]}>
      <div className={chartSectionStyle["lineChart"]}>
        <h2> قیمت روز جوجه های گوشتی ایران</h2>
        <LineCharts />
      </div>
      <div className={chartSectionStyle["pieChart"]}>
        <h2> میزان جوجه ریزی نژادهای مختلف</h2>
        <PieChart />
      </div>
    </div>
  );
}
