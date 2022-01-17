import Link from 'next/link';

const Home = () => {
  return (
    <section>
      <h2>PETEVER MAGAZINE</h2>
      <ul>
        <li>
          <Link href="/">
            <a>
              <div>
                <img
                  width={268}
                  height={176}
                  src="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg"
                  alt=""
                />
              </div>
              <dl>
                <dt>PET LIFE hahahahaah</dt>
                <dd>
                  <div>
                    <span>PET LIFE</span>
                    <span>petever</span>
                    <span>2021-01-22</span>
                  </div>
                  <p>
                    rkasdasdasdlkajsdlkasjdlkasdjaslkdjaslkdsajdlkasjdalksdjaslkdjaslkdjsalkdasjldkajdklsjadlkajdalskd
                  </p>
                </dd>
              </dl>
            </a>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Home;
