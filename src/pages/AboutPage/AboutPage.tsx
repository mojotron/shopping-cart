import Button from '../../ui/Button/Button';
import CheckLabel from '../../ui/CheckLabel/CheckLabel';

// const TextBlock = () => {};

const AboutPage = () => {
  return (
    <main className="flex flex-col gap-24 items-center text-center">
      <section className="flex flex-col gap-8 max-w-[600px]">
        <h1 className="font-bold text-5xl font-righteous text-emerald-600">
          Who We Are
        </h1>
        <p className="text-neutral-600 px-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
          tenetur tempora beatae adipisci provident, et a eum, iure ea impedit
          ducimus amet sed dolorum maiores laborum sapiente architecto totam
          nulla? Laudantium molestiae sed sapiente beatae vitae labore est
          reiciendis. Asperiores aperiam odit dolore excepturi sunt ad culpa?
          Fuga veritatis commodi minus assumenda laudantium et in
          necessitatibus, error illum hic delectus.
        </p>
        <div className="max-w-[600px] text-center font-lg font-bold text-emerald-800 border-y-2 border-emerald-400 flex items-center justify-center gap-5 p-5 capitalize">
          <p className="w-[150px]">over 20 years of gardening</p>
          <p className="w-[150px]">web Store 3 years</p>
          <p className="w-[150px]">hundreds happy customers</p>
        </div>
      </section>
      <section className="flex flex-col gap-8 max-w-[600px]">
        <h2 className="font-bold text-4xl font-righteous text-emerald-600">
          What is Our Vision
        </h2>
        <p className="text-neutral-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quos
          asperiores quas ipsum in eum tempora debitis dolorem quasi sed
          laborum, perferendis corporis reiciendis doloribus. Eum accusantium
          autem aliquid architecto.
        </p>
        <ul></ul>
        {/*  */}
        <div className="flex flex-col gap-5 items-center">
          <div>
            <h3 className="font-bold text-2xl font-righteous text-emerald-600 capitalize">
              better and healthier food option
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              eaque optio quam voluptatum impedit vero.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-2xl font-righteous text-emerald-600 capitalize">
              sustainable economy
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              quaerat labore dolores libero pariatur aliquid necessitatibus
              accusantium maiores corrupti veniam.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-2xl font-righteous text-emerald-600 capitalize">
              ecological gardening methods
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perferendis, recusandae quo! Dolor hic possimus, et aliquid nulla
              illum alias debitis explicabo doloremque neque labore dolorem
              minima ea odit, consequatur quisquam!
            </p>
          </div>
          <div>
            <h3 className="font-bold text-2xl font-righteous text-emerald-600 capitalize">
              zero waste policy
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              voluptatem magni accusamus optio neque excepturi?
            </p>
          </div>
        </div>
        {/*  */}
      </section>
      <section>
        <h2 className="font-bold text-4xl font-righteous text-emerald-600">
          Join Our Team
        </h2>
        <Button onClick={() => {}}>Apply now</Button>
      </section>
      <section>
        <h2>
          We grow organic healthy vegetables for you. So you can have one stress
          less in your life.
        </h2>
      </section>
    </main>
  );
};

export default AboutPage;
