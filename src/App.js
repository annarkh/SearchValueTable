import React, {useState} from 'react';
import './App.css';
import data from './test1'

const mainConteiner = {
    display: "flex",
    flexDirection: "column"
};
const sizeTable = {
    border: "1px solid #ccc",
    align: "center",
    cellPadding: "20",
    margin: "1em",
    fontSize: "14px",

};
const sizeStr = {
    border: "1px solid #ddd",
    padding: "5px",
    borderRadius: "3px",
    width: "5%"
};

const search = {
    paddingTop: "20px",
};


function Str(props) {
    let {
        id, fullname, date_submited,
        position, organization, org_type,
        territory, location, vid, birthdate,
        gualification_category, plan_attestation_year, workflow
    } = props.tableData;
    return <tr>
        <td style={sizeStr}>{id}</td>
        <td style={sizeStr}>{fullname}</td>
        <td style={sizeStr}>{date_submited}</td>
        <td style={sizeStr}>{position}</td>
        <td style={sizeStr}>{organization}</td>
        <td style={sizeStr}>{org_type}</td>
        <td style={sizeStr}>{territory}</td>
        <td style={sizeStr}>{location}</td>
        <td style={sizeStr}>{vid}</td>
        <td style={sizeStr}>{birthdate}</td>
        <td style={sizeStr}>{gualification_category}</td>
        <td style={sizeStr}>{plan_attestation_year}</td>
        <td style={sizeStr}>{workflow}</td>
    </tr>
}

function App() {
    let [text, setText] = useState("");
    let dataCo = [];
    data.teachers.map((item, i) => {
        if (item !== undefined) {
            if (text.trim() !== "") {
                for (let field in item) {
                    if (item[field].indexOf(text) > -1) {
                        dataCo.push(<Str tableData={item} key={i}/>);
                        break;
                    }
                }
            } else
                dataCo.push(<Str tableData={item} key={i}/>);
        }
    });

    let handleChange = (event) => {
        setText(event.target.value)
    };

    return (
        <div className="App">
            <div style={mainConteiner}>
                <div style={search}>
                    <input placeholder="Поиск" value={text} onChange={handleChange}/>
                </div>
                <table style={sizeTable}>
                    <tbody>
                    {
                        dataCo.map((item) => {
                            return item
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;
