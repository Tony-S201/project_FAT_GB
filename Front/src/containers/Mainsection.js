/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Main from 'src/components/Main';

// Action Creators


/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */

const mapStateToProps = (state) => {
  const {
    titlesLoaded,
    backgroundLoaded,
    sectionTitles,
    sectionBackground,
  } = state;
  const unitedItems = [];
  let i = 0;
  if (sectionBackground.length !== 0 && sectionTitles.length !== 0) {
    for (i = 0; i < sectionBackground.length; i += 1) {
      const unitedItem = {
        title: sectionTitles[i],
        background: sectionBackground[i],
      };
      unitedItems.push(unitedItem);
    }
  }

  return ({
    unitedItems,
    titlesLoaded,
    backgroundLoaded,
  });
};

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = {};

// Container
const Mainsection = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

/* 2 temps
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const ExampleContainer = createContainer(Example);
*/

/**
 * Export
 */
export default Mainsection;
