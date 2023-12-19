import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMeal } from '../../../redux/slice/diarySlice.jsx';
import symbol from '../../../assets/Welcome/symbol.svg';
import BreakfastImage from '../../../assets/Diary/Breakfast.png';
import {
  TitelSection,
  IconMeal,
  TitelMeal,
  TitelNutrients,
  NutrientsSection,
  ButtonRecord,
  TitelRecord,
  InputMeal,
  SVG,
  InputFlex,
  ModalRecord,
  ButtonDelete,
  ButtonAdd,
  ButtonSolution,
  ButtonFlex,
  Section,
} from './DiaryPage.styled.jsx';

const Breakfast = () => {
  const dispatch = useDispatch();
  const meals = useSelector((state) => state.diary.meals);
  const [modalOpen, setModalOpen] = useState(false);
  const [mealName, setMealName] = useState('');
  const [carbonohidrates, setCarbonohidrates] = useState('');
  const [protein, setProtein] = useState('');
  const [fat, setFat] = useState('');

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setMealName('');
    setCarbonohidrates('');
    setProtein('');
    setFat('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addMeal({
        name: mealName,
        carbonohidrates,
        protein,
        fat,
      })
    );

    setTotalNutrients((prev) => ({
      carbonohidrates: prev.carbonohidrates + parseFloat(carbonohidrates),
      protein: prev.protein + parseFloat(protein),
      fat: prev.fat + parseFloat(fat),
    }));

    closeModal();
  };

  const [totalNutrients, setTotalNutrients] = useState({
    carbonohidrates: 0,
    protein: 0,
    fat: 0,
  });

  return (
    <Section>
      <TitelSection>
        <IconMeal src={BreakfastImage} alt="Breakfast"></IconMeal>
        <TitelMeal>Breakfast</TitelMeal>
      </TitelSection>

      <NutrientsSection>
        <TitelNutrients>
          Carbonohidrates: {totalNutrients.carbonohidrates}
        </TitelNutrients>
        <TitelNutrients>Protein: {totalNutrients.protein}</TitelNutrients>
        <TitelNutrients>Fat: {totalNutrients.fat}</TitelNutrients>
      </NutrientsSection>

      <ButtonRecord onClick={openModal}>+ Record your meal</ButtonRecord>

      {modalOpen && (
        <ModalRecord>
          <TitelRecord>Record your meal</TitelRecord>
          <TitelSection>
            <IconMeal src={BreakfastImage} alt="Breakfast"></IconMeal>
            <TitelMeal>Breakfast</TitelMeal>
          </TitelSection>
          <form onSubmit={handleSubmit}>
            <InputFlex>
              {/* <label htmlFor="mealName"></label> */}
              <InputMeal
                type="text"
                id="mealName"
                value={mealName}
                onChange={(e) => setMealName(e.target.value)}
                required
                placeholder="The name of the product or dish"
                size="35"
              />

              {/* <label htmlFor="carbonohidrates">Carbonohidrates</label> */}
              <InputMeal
                type="text"
                id="carbonohidrates"
                value={carbonohidrates}
                placeholder="Carbonohidrates"
                onChange={(e) => setCarbonohidrates(e.target.value)}
                required
                size="35"
              />

              {/* <label htmlFor="protein">Protein</label> */}
              <InputMeal
                type="text"
                id="protein"
                value={protein}
                placeholder="Protein"
                onChange={(e) => setProtein(e.target.value)}
                required
                size="8"
              />

              {/* <label htmlFor="fat">Fat</label> */}
              <InputMeal
                type="text"
                id="fat"
                value={fat}
                placeholder="Fat"
                onChange={(e) => setFat(e.target.value)}
                required
                size="8"
              />
              <ButtonDelete type="submit" onClick={handleSubmit}>
                <SVG>
                  <use href={symbol + '#icon-trash-03'} />
                </SVG>
              </ButtonDelete>
            </InputFlex>

            <ButtonAdd type="submit" onClick={handleSubmit}>
              + Add more
            </ButtonAdd>

            <ButtonFlex>
              <ButtonSolution type="submit">Save</ButtonSolution>
              <ButtonSolution type="button" onClick={closeModal}>
                Cancel
              </ButtonSolution>
            </ButtonFlex>
          </form>
        </ModalRecord>
      )}
      {meals.map((meal) => (
        <div key={meal.id}>
          <p>{meal.name}</p>
          <p>Carbonohidrates: {meal.carbonohidrates}</p>
          <p>Protein: {meal.protein}</p>
          <p>Fat: {meal.fat}</p>
        </div>
      ))}
    </Section>
  );
};

console.log();

export default Breakfast;
