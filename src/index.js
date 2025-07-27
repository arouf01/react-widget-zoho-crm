import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import About from "./Pages/About";

window.ZOHO.embeddedApp.on("PageLoad", async (data) => {
  const getEntity = data?.Entity;
  const getEntityIds = data?.EntityId;

  let allData = [];

  for (const getID of getEntityIds) {
    const response = await ZOHO.CRM.API.getRecord({
      Entity: getEntity,
      RecordID: getID,
    });
    if (response?.data?.[0]) {
      allData.push(response.data[0]);
    }
  }

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <HashRouter>
      <Routes>
        <Route path="/" element={<App data={allData} />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </HashRouter>
  );
});

window.ZOHO.embeddedApp.init();
