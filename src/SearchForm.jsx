import React from 'react'

const SearchForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.elements);
        const searchValue = e.target.elements.search.value;
        if(!searchValue)
        return;
    }
  return (
    <section>
        <h1 className='title'>unsplash images</h1>
        <form className='search-form' onSubmit={handleSubmit}>
            <input type="text" className="form-input search-input"  name="search" placeholder='cat'></input>
            <button className='btn' type='submit'>Search</button>
        </form>
    </section>
  )
}

export default SearchForm
