import React,{useState, useContext} from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text,setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(text === '') {
            alertContext.setAlert('Please Enter Something','light');
        } else {
            githubContext.searchUsers(text);
            setText('');
        }
        
    }

    return (
      <div>
        <form onSubmit={onSubmit}>
            <input type='text' name="text" placeholder="Search Users..." value={text} onChange={onChange}/>
            <input type='submit' value='Search' className = 'btn btn-block btn-dark' />
        </form>
        {githubContext.users.length > 0 && 
            <button className='btn btn-block btn-light' onClick={githubContext.clearUsers}>
                Clear Users
            </button>
        }
      </div>
    )
  }

export default Search;

