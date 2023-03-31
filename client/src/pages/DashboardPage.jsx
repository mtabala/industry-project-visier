import React from "react";
import Aside from "../components/Aside/Aside";
import CustomizeSection from "../components/CustomizeSection/CustomizeSection";
import HeaderForm from "../components/HeaderForm/HeaderForm";

function DashboardPage() {
  return (
    <>
      <Aside />
      <section>
        <HeaderForm />
        <CustomizeSection />
      </section>
    </>
  );
}

export default DashboardPage;
