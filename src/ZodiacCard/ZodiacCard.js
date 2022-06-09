import './ZodiacCard.css';

export default function ZodiacCard({ zodiac }) {
  return (
    <div className='zodiac-card'>
      <p className='name'> {zodiac.name}</p>
      <p className='name'> {zodiac.dates}</p>
      <img src={`images/${zodiac.name}.png`}/>
    </div>
  );

}
