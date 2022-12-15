import styled from 'styled-components'
import { useQuerySubscription } from 'react-datocms'

const Presentations = () => {
	return (
		<>
			{presentations.map((presentation, index) => (
				<Presentation presentation={presentation} key={index}/>
			))}
		</>
	)
}

const Presentation = (props) => { 
	const {presentation} = props
	return (
		<PresentationWrapper>
			<Time>{presentation.startTime.substring(11, 16)}</Time>
			<Title>{presentation.title}</Title>
			<Presenter>
				{presentation.presenter.name} {presentation.presenter.company}, {presentation.presenter.title}
				<div>
					<img src={presentation.presenter.photo.url} alt={presentation.presenter.name}/>
				</div>
			</Presenter>
		</PresentationWrapper>
	)
}

const Presenter = styled.div`
	font-size: 14px;
	font-weight: 400px;
	color: rgb(150,150,150);
	img {
		width: 80px;
		border-radius: 50%;
		padding-top: 10px;
	}
`

const PresentationWrapper = styled.div`
	padding: 15px;
`

const Time = styled.div`
	font-size: 14px;
	font-weight: 400;
	color: rgb(150,150,150)
`

const Title = styled.div`
	font-size: 18px;
	font-weight: 600;
`

export default Presentations

const presentations = [
	{
		 title: "Köszöntő",
		 startTime: "2022-05-25T09:00:00+01:00",
		 presenter: {
			  title: "ügyvezető igazgató",
			  photo: {
					url: "https://www.datocms-assets.com/70643/1651850041-1644788738-dalos_otto.png"
			  },
			  name: 'Dalos Ottó',
			  company: 'Cisco Magyarország'
		 }
	},
	{
		 title: "Befektetés az IT oktatásba",
		 startTime: "2022-05-25T09:20:00+01:00",
		 presenter: {
			  title: "vezérigazgató",
			  photo: {
					url: "https://www.datocms-assets.com/70643/1651850083-1647423382-gonda_gabor_2.png"
			  },
			  name: 'Gonda Gábor',
			  company: 'T Systems Magyarország Zrt'
		 }
	},
	{
		 title: "A digitális evolúció és az oktatás",
		 startTime: "2022-05-25T09:45:00+01:00",
		 presenter: {
			  title: "angyalbafektető, ügyvezető",
			  photo: {
					url: "https://www.datocms-assets.com/70643/1651850126-1646229711-balogh_peter_2.png"
			  },
			  name: 'Balogh Péter',
			  company: 'Baconsult Kft'
		 }
	}
]