import { useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const SearchBox = () => {
  const [keyword, setKeyword] = useState('')
  const history = useHistory()

  const searchHandler = (e) => {
    e.preventDefault()
    if (keyword) {
      history.push(`/search/${keyword}`)
    } else {
      history.push(`/`)
    }
  } 
  return (
    <Form onSubmit={searchHandler} inline>
      <FormControl
        type='text'
        placeholder='tìm kiếm ...'
        className='mr-sm-2'
        value={keyword}
        onChange={({ target: { value } }) => setKeyword(value)}
      />
      <Button type='submit' variant='warning'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='bi bi-search'
          viewBox='0 0 16 16'
        >
          <path
            fillRule='evenodd'
            d='M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z'
          />
          <path
            fillRule='evenodd'
            d='M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z'
          />
        </svg>{' '}
      </Button>
    </Form>
  )
}

export default SearchBox
