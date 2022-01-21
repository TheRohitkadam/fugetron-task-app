import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./util/theme";
import Home from "./view/Home";
import Form from "./view/Form";
import Dialogbox from "./Components/Dialogbox"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/add-record" element={<Form/>}/>
          {/* <Route path="/form" element={<Dialogbox open={true} name="Rohit kadam"/>}/> */}
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
