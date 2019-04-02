import React, { Fragment } from "react";
import Link from "next/link";
import { Container, CourseSectionWrapper, Card } from "./styles";
import { Wrapper } from '../Grid';
import { TiStarFullOutline } from "react-icons/ti";
import { accent } from "../../utils/colors";
import Gallery from "react-photo-gallery";

const column1 = [
	{
		src: "/static/curso1.jpg",
		width: 3,
		height: 2,
	},
	{
		src: "/static/slide3.jpg",
		width: 3,
		height: 2,
	},
];

const CourseSection = () => {
	return (
		<Fragment>
			<Container>
				<Wrapper>
					<CourseSectionWrapper>
						<h2>
							Curso <br />Em Destaque
						</h2>
						<Card>
							<h5>Curso Síndico Profissional</h5>
							<div className="stars">
								<TiStarFullOutline style={{ color: accent }} />
								<TiStarFullOutline style={{ color: accent }} />
								<TiStarFullOutline style={{ color: accent }} />
								<TiStarFullOutline style={{ color: accent }} />
								<TiStarFullOutline style={{ color: accent }} />
							</div>
							<br />
							<Gallery photos={column1} margin={10} columns={2} />
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Possimus qui sapiente libero blanditiis eius quidem officia
								veritatis laudantium facere eum exercitationem corrupti
								delectus, maxime unde, quae quas atque rerum modi. Lorem ipsum
								dolor sit amet, consectetur adipisicing elit. Possimus qui
								sapiente libero blanditiis eius quidem officia veritatis
								laudantium facere eum exercitationem corrupti delectus, maxime
								unde, quae quas atque rerum modi. Lorem ipsum dolor sit amet,
								consectetur adipisicing elit. Possimus qui sapiente libero
								blanditiis eius quidem officia veritatis laudantium facere eum
								exercitationem corrupti delectus, maxime unde, quae quas atque
								rerum modi. Lorem ipsum dolor sit amet, consectetur adipisicing
								elit. Possimus qui sapiente libero blanditiis eius quidem
								officia veritatis laudantium facere eum exercitationem corrupti
								delectus, maxime unde, quae quas atque rerum modi.
							</p>
							<Link href="/curso">
								<a>Mais informações</a>
							</Link>
						</Card>
					</CourseSectionWrapper>
				</Wrapper>
			</Container>
		</Fragment>
	);
};

export default CourseSection;
