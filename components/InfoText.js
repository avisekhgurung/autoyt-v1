import Link from 'next/link'
import PrimaryButton from './PrimaryButton'


const InfoText = ({infoText}) => {
	return (
		<div className="flex flex-col items-center text-center mt-[10rem]">
			<h3 className="bold text-[6.2rem] lg:text-[4.2rem] w-[100rem] lg:w-[93rem] mb-[3rem]">
				{infoText?.title}
			</h3>
			<PrimaryButton text="Get Started" />
		</div>
	)
}

export default InfoText
