import './App.css';
import Card from './components/Card';

const App = () => {
  return (
    <div className="cards">
      <Card
        imageUrl="https://a-z-animals.com/media/2022/06/attentive-dog-and-cat-looking-up-in-same-direction-picture-id1324117906-300x180.jpg"
        title="Lion"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste exercitationem a modi veritatis possimus est, error unde voluptatem sequi eligendi."
      />
      <Card
        imageUrl="https://a-z-animals.com/media/2021/12/Fastest-Water-Animals-Flying-Fish-300x157.jpg"
        title="Girafe"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae id voluptate cupiditate itaque at quasi impedit ducimus veritatis odit. Quidem!"
      />
        <Card
        imageUrl="https://a-z-animals.com/media/2023/06/shutterstock-1297741705-huge-licensed-scaled-300x239.jpg"
        title="Lion"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste exercitationem a modi veritatis possimus est, error unde voluptatem sequi eligendi."
      />
    </div>
  );
};

export default App;