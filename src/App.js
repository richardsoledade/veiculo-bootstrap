import "./App.css";
import { Button, Form, InputGroup, Table } from "react-bootstrap";
import { useState } from "react";
import { FaBeer } from 'react-icons/fa';

function App() {
  const [placa, setPlaca] = useState("");
  const [modelo, setModelo] = useState("");
  const [marca, setMarca] = useState("");
  const [ano, setAno] = useState("");
  const [veiculos, setVeiculos] = useState([]);

  function cadastrar() {
    let validoParaCadastro = true
    veiculos.forEach((veiculo)=>{
      if(veiculo.placa == placa){
        validoParaCadastro = false
      }
    })
    if(validoParaCadastro){
      let veiculo = {
        placa: placa,
        modelo: modelo,
        marca: marca,
        ano: ano,
      };
      setVeiculos([veiculo, ...veiculos]);
      alert("veiculo cadastrado com sucesso!");
      limparForm();
    } else  {
      alert("placa ja cadastrada")
    }
  }



  function limparForm() {
    setPlaca("");
    setModelo("");
    setMarca("");
    setAno("");
  }

  function excluir (placa) {
    veiculos.forEach((veiculo, index)=>{
      if (veiculo.placa == placa){
        veiculos.splice(index, 1)
        setVeiculos([...veiculos])
        alert("veiculo excluido")
      }
    })
  }





  return (
    <>
      <div className="container p">
        {/* MB = MARGIN BUTTON */}
        <InputGroup className="mb-2 mt-3">
          <Form.Control
            value={placa}
            onChange={(e) => {
              setPlaca(e.target.value);
            }}
            placeholder="Placa"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup className="mb-2">
          <Form.Control
            value={modelo}
            onChange={(e) => {
              setModelo(e.target.value);
            }}
            placeholder="Modelo"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup className="mb-2">
          <Form.Control
            value={marca}
            onChange={(e) => {
              setMarca(e.target.value);
            }}
            placeholder="Marca"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            value={ano}
            onChange={(e) => {
              setAno(e.target.value);
            }}
            placeholder="Ano"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>

        <Button onClick={cadastrar} className="mb-3">
          Salvar
        </Button>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Placa</th>
              <th>Modelo</th>
              <th>Marca</th>
              <th>Ano</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {veiculos.map((veiculo) => {
              return (
                <tr>
                  <td>{veiculo.placa}</td>
                  <td>{veiculo.modelo}</td>
                  <td>{veiculo.marca}</td>
                  <td>{veiculo.ano}</td>
                  <td>
                    <Button id="exbtn" onClick={()=>{excluir(veiculo.placa)}}><FaBeer /></Button>
                  </td>
                </tr>
              );
            })}
           </tbody>
        </Table>
      </div>
    </>
  );
}

export default App;
