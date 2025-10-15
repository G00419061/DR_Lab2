import { useState } from "react";

function Create() {
  const [title, setTitle] = useState(''); //manages title information

  const [year, setYear] = useState(''); //manages year information

  const [poster, setPoster] = useState(''); //manages poster information

  const handleSubmit = (e) => { //runs on form button press
    e.preventDefault();
    console.log(title, year, poster); //prints added movie information to console log
  }

  return (
    <div>
      <h2>This is my Create Component.</h2>
      <form onSubmit={handleSubmit}>
        {/*Form field for title*/}
        <div className="form-group">
          <label>Add Movie Title: </label> 
          <input type="text"
            className="form-control"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }} //continuously updates as text entered into title field
          />
        </div>

        {/*Form field for year*/}
        <div className="form-group">
          <label>Add Movie Year: </label>
          <input type="text"
            className="form-control"
            value={year}
            onChange={(e) => { setYear(e.target.value) }} //continuously updates as text entered into year field
          />
        </div>

        {/*Form field for poster*/}
        <div className="form-group">
          <label>Add Movie Poster: </label>
          <textarea type="text"
            className="form-control"
            value={poster}
            onChange={(e) => { setPoster(e.target.value) }} //continuously updates as text entered into poster field
          />
        </div>
        <input type="submit" value="Add Movie" /> 
      </form>
    </div>
  );
}

export default Create;//marks page for export