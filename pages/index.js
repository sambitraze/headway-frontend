import IndexEvent from '../components/indexEvent';
import IndexHero from "../components/indexHero";
import IndexNav from '../components/indexnav';
import IndexFooter from '../components/IndexFooter';
import IndexStats from '../components/IndexStat';
import IndexPricing from '../components/indexPricing';
export default function Home() {
  return (
    <div>
      <IndexNav />
      <IndexHero />
      <IndexEvent />
      <IndexEvent />
      <IndexStats />
      <IndexPricing />
      <IndexFooter />      
    </div>
  )
}
