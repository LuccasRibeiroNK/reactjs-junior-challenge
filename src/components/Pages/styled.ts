import styled from 'styled-components';

export const Styles = styled.div`{
    
    border-radius: 6px;
    background: #ffffff;
    border-style: none;
    table-border-style: striped;
    font-size: 0.8em;
}
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
}

.line{
        color: #c01a2e;      
        margin: 0.5em;   
        width: 100%;
    
}
button {
    border-style: none;
    border-radius: 6px;
    color: #fffa;
    font-size: 0.8em;     
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 0.5em;
    cursor: pointer;
}
.btnCadastrar{
    color: #ffffff;
    text-decoration: none !important
}
.header{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5em;
    padding-bottom: 1.5em;
}
button{           
    font-size: 1em;
    display: display-inline-block;
}

input{    
    border-radius: 6px;    
    padding: 0.5em;        
    margin: 0.5em;   
    
}
.search{ 
    margin-left: 10.5em;
}
.search-input{
        width: 30%;   
        margin-left: -0.5em;
        margin-bottom: 2.5em;
}
h2{
    text-align: center;
    font-size: 1.5em;
    font-weight: bold;
}
.notas{
    margin: 0.5em;
    padding: 5em;
    width: 97%;
}
    
.table-bordered{ 
    margin-left: 10%;
    width: 80%;
    border-radius: 6px;
}
@media (max-width: 500px) {
    max-width: 100%;
  }
`;

export const StyledC = styled.div`
.container {
    padding: 10px;
    margin-top: 1.5em;
    max-width: 80%;    
    text-align: center;
    background: #ffffff;
    }
  input  {
    display: flex;
    justify-content: center;
    align-items: center;
        width: 100%;
        border-radius: 6px;
        padding: 0.5em;
        margin: 0.5em;
  }
  .endereco{
    width: 100%;
    
  }
  button {
    display: inline-block;    
    margin: 1em;
    margin-top: -35px;
    width: 20%;
  }
  .notas{
    height: 100px;
    margin-top: -35px;
    
    
  }

@media (max-width: 500px) {
    max-width: 100%;
}
`;

