import fields from '../fixtures/fields.json'
import v4  from 'uuid/v4' // it is a helper to work with key, in react you must specify the key to keep a unique id

const Field = ({field}) => // without parentesis also returns an object and its fine to react
  <div className="form-group row in">
    <label htmlFor={field.name} className="col-form-label ">{field.label}</label>
    <input type={field.type} name={field.name} placeholder={field.placeholder}/>
    <style>{`
      .in {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      input {
        border: 1px solid #c0c0c0;
        width: 10rem;
      }

    `}</style>
  </div>

const TextArea = (props) => ( // or if you want use parentesis also is ok for react
    <div className="row">
      <textarea>

      </textarea>
      <style>
      {
        `textarea {
          width: 100vh;
          border: 1px solid #c0c0c0;
        }`
      }</style>
    </div>
)

// also you can submit from an outside function and it's fine at first
// after you understand how it works you can create high order functions
// or high order components it depends of your necesities
const submit = () => alert("I'm a function just write me as other in wherever place you want! I submit your data to the server")

const BuildForm = (props) => {
  /**
  *  This functions build the standard form using the json as input
  **/
  // to debug or use React debugger for chrome
  //console.log("buildForm", props)
  return (
  <div className="col-sm-12 build-form">
      <span>Elementos en el CDR</span>
      <form className="col-md-4">
        {
          props.fields.map(field => <Field key={v4()} field={field}/>)
        }
        <button onClick={submit}> Save me </button>
      </form>
    <style>{`
      .build-form {
        display: flex;
        flex-direction: column;
        margin-top: 1.5rem;
      }
      .build-form span {
        font-size: 1rem;
        font-weight: bold;
      }
      button {
        align-self: center;
        border: #c0c0c0;
        background: #16a085;
        color: #fff;
        height: 2rem;
        width: 15rem;
      }
    `}</style>
  </div>
  )

}

const Index = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 head-box">
          <span>Inserta un EDR valido para el pipe TL_Mediation_GSM</span>
          <TextArea/>
        </div>
      </div>
      <div className="row">
        <BuildForm {...props} />
      </div>
      <style>{`
        .head-box span {
          font-size: 1rem;
        }
      `}
      </style>
    </div>
  )
}


Index.getInitialProps = async ({ req }) => {
  //const res = await fetch('https://python.service/fields/endpoint')
  //const json = await res.json()
  // console.log(json)
  //return { fields: json.data }
  // it is called on server it a helper to call before render
  // so it increase your performance to display to the user
  return { fields: fields.data.fields }
}


export default Index
