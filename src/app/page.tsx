import { Splash } from './index/components/Splash';

export default function Home() {
  return (
    <div>
      <Splash />
      <div className="bg-green-900 grid grid-cols-1 gap-4 py-24 px-2 sm:px-4 md:px-8 text-center">
        <div>
          <h2>PHYSICAL SNEAKERS</h2>
          <p>Premium physical sneakers designed from the sole up by the Endstate team</p>
        </div>
        <h2>NFTS</h2>
        <p>
          Digital artwork that serves as a certificate of authenticity, membership in the Endstate
          community, and much more
        </p>
        <h2>EXCLUSIVE EXPERIENCES</h2>
        <p>
          Our NFC-enabled sneakers allow for in-person and digital token-gated experiences with your
          favorite artists, athletes, and creators
        </p>
      </div>
    </div>
  );
}
