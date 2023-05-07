import * as React from "react";
import { IPost } from "../types";

type Props = {
	savePost: (e: React.FormEvent, formData: IPost) => void;
};

const AddPost: React.FC<Props> = ({ savePost }) => {
	const [formData, setFormData] = React.useState<IPost>();

	const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
		setFormData({
			...formData,
			[e.currentTarget.id]: e.currentTarget.value,
		});
	};

	return (
		<form className='Form' onSubmit={(e) => savePost(e, formData)}>
			<div>
				<div className='Form--field'>
					<label htmlFor='name'>Title</label>
					<input onChange={handleForm} type='text' id='title' />
				</div>
				<div className='Form--field'>
					<label htmlFor='body'>Description</label>
					<input onChange={handleForm} type='text' id='body' />
				</div>
			</div>
			<button
				className='Form__button'
				disabled={formData === undefined ? true : false}>
				Add Post
			</button>
		</form>
	);
};

export default AddPost;

// import * as React from "react";
// import { IPost } from "../types";

// type Props = {
// 	savePost: (formData: IPost) => void;
// };

// const AddPost: React.FC<Props> = ({ savePost }) => {
// 	const [formData, setFormData] = React.useState<IPost>({
//     id: 0,
// 		title: "",
// 		body: "",
// 	});

// 	const handleForm = (e: React.ChangeEvent<HTMLInputElement>): void => {
// 		setFormData({
// 			...formData,
// 			[e.target.id]: e.target.value,
// 		});
// 	};

// 	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
// 		e.preventDefault();
// 		if (formData.title && formData.body) {
// 			savePost(formData);
// 			setFormData({id:0, title: "", body: "" });
// 		}
// 	};

// 	return (
// 		<form className='Form' onSubmit={handleSubmit}>
// 			<div>
// 				<div className='Form--field'>
// 					<label htmlFor='title'>Title</label>
// 					<input
// 						onChange={handleForm}
// 						type='text'
// 						id='title'
// 						value={formData.title}
// 					/>
// 				</div>
// 				<div className='Form--field'>
// 					<label htmlFor='body'>Description</label>
// 					<input
// 						onChange={handleForm}
// 						type='text'
// 						id='body'
// 						value={formData.body}
// 					/>
// 				</div>
// 			</div>
// 			<button
// 				className='Form__button'
// 				disabled={!formData.title || !formData.body}>
// 				Add Post
// 			</button>
// 		</form>
// 	);
// };

// export default AddPost;
