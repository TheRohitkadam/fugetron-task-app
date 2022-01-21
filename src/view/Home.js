import { useState, useEffect } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import Navbar from "../Components/Navbar";
import DataTable from "../Components/DataTable";
import SubBar from "../Components/SubBar";

export default function Home() {
  const [data, setData] = useState({});

  useEffect(async () => {
    try {
      const response = await axios.get(
        "https://j5ej5u32gg.execute-api.us-east-1.amazonaws.com/v1/fetch"
      );
      setData(response && response.data && response.data.data);
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <SubBar />
        <DataTable data={data} setData={setData} />
      </Container>
    </>
  );
}
