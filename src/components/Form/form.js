import React from 'react'

//Ui library
import { Button} from 'semantic-ui-react';
import { Input } from 'semantic-ui-react'

const Form =({searchName})=>{
	return(
		<div>
			<form onSubmit={searchName}>
				<Input focus  icon='search' iconPosition='left' type="text" placeholder="search here..." name="movieName"></Input>
				<Button inverted color='blue'>Search</Button>
			</form>
		</div>
	);

}

export default Form;