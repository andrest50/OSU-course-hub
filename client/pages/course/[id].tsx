import { useQuery } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { COURSE, COURSE_COMMENTS } from 'utils/graphql';
import Comment from '../../components/Comment';
import Header from '../../components/Header';
import Info from '../../components/Info';
import { CommentData, CourseType } from '../../utils/types';
import AddComment from '../../components/AddComment';

const CourseComments = ({ id }) => {
	const { loading, data } = useQuery<CommentData>(COURSE_COMMENTS, {
		variables: { courseID: parseInt(id) },
	});

	if (loading || !data) {
		return <></>;
	}
	return (
		<Container>
			<h3>Comments:</h3>
			{data.comments.slice().reverse().map(comment => (
				<Comment key={comment.id} comment={comment} />
			))}
		</Container>
	);
};

const CoursePage = () => {
	const router = useRouter();
	const { loading, data } = useQuery<CourseType>(COURSE, {
		variables: {
			courseID: /^\d+$/.test(router.query.id as string)
				? parseInt(router.query.id as string)
				: null,
		},
		skip: !router.query.id,
	});

	if (loading || !router.query.id) {
		return <></>;
	} else if (!data) {
		return <Error statusCode={404} />;
	}
	return (
		<>
			<Head>
				<title>OSU Course Hub</title>
				<link rel='icon' href='/favicon.png' />
			</Head>
			<Header searchbarToggled={true} />
			<Info course={data.course} />
			<AddComment />
			<CourseComments id={data.course.id} />
		</>
	);
};

export default CoursePage;
