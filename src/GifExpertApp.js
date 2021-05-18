import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({defaultCategories = []}) => {
	// const [categories, setCategories] = useState(['One Punch']);
	const [categories, setCategories] = useState(defaultCategories);

	// const handleAdd = () => {
	//   // setCategories([...categories, 'HunterxHunter']);
	//   setCategories((cats) => [...cats, 'HunterxHunter']); //callback
	// };

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />

			{/* <button onClick={handleAdd}>Agregar</button> */}

			<ol>
				{categories.map((category) => (
					<GifGrid key={category} category={category} />
				))}
			</ol>
		</>
	);
};
