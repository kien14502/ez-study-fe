import Card from './components/Card';

const LearningJourney = () => {
	return (
		<div className="shadow-main w-full rounded-[20px] border bg-white pt-[60px] pr-4 pb-12 pl-3">
			<Card type={'done'} description={'Làm 3 bài tập về nhà bất kỳ'} point={0} />
		</div>
	);
};
export default LearningJourney;
