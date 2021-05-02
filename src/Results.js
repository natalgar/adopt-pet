import Pet from './Pet';

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <div>No Pets Found</div>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            key={pet.id}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
