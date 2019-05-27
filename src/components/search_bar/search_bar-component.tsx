import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

interface SearchBarProps {
  thunkSearchMovie: Function;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const [searchString, setSearchString] = useState('');

  const handleSearchInputChanges = (e) => {
    setSearchString(e.target.value);
  }

  const resetInputField = () => {
    setSearchString('')
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.thunkSearchMovie(searchString);
    resetInputField();
  }

  return (
    <Form className='navbar-form navbar-left search_bar' role='search'>
      <Form.Group>
        <Row className='justify-content-sm-center'>
          <Col sm='auto' md={{ span: 4 }}>
            <Form.Control
              className="mb-2"
              type='text'
              value={searchString}
              onChange={handleSearchInputChanges}
              placeholder='Enter Movie...' />
          </Col>
          <Col sm='auto'>
            <Button
              variant='primary'
              type='submit'
              onClick={callSearchFunction}>
              Submit
          </Button>
          </Col>
        </Row>
      </Form.Group>
    </Form>
  );
}

export default SearchBar;
