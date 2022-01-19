const Card = () => (
    <div>
        <div className='card'>
            <img className='card-image' src='https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg?size=626&ext=jpg' alt='dp' />
            <h6 className='card-badge'> SOLD OUT</h6>
        </div>
        <div className='card-stats'>
            <h6 className='card-rating'>⭐ 5.0</h6>
            <h6 className='card-place'> (6). USA </h6>
        </div>
        <h6 className='card-details'>Life lessons with Katie Zaferes</h6>
        <div className='card-rates'>
            <h6 className='card-rate'> From $136</h6>
            <h6 className='card-person'> / person</h6>
        </div>
    </div>
);

export default Card;