import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home flex justify-center">
      <div className="w-[200px]">
        <h2 className="font-bold mt-2">Tips</h2>
        <ul>
          <li onClick={() => navigate('/safe-menu')}>Safe Menu</li>
        </ul>
        <h2 className="font-bold mt-2">Game</h2>
        <ul>
          <li onClick={() => navigate('/game/angry-pumpkins')}>🎃 Angry Pumpkins</li>
        </ul>
      </div>
    </div>
  )
}