/**
 * Local imports
 */
import { cleanTourDates } from 'src/utils/tourCleaner';
import { freshNews } from 'src/utils/newsCleaner';
import { videoIds } from 'src/utils/videosUtil';

/**
 * Initial State
 */
const initialState = {
  sectionTitles: [],
  gallery: [],
  news: [],
  videos: [],
  tourDates: [],
  loadedData: {
    tourdates: false,
    mediaPictures: false,
    newsLoaded: false,
    vidLoaded: false,
  },
  sectionDisco: [],
  sectionAbout: [],
  sectionBackground: [],
  sectionAboutDescription: [],
  aboutLoaded: false,
  backgroundLoaded: false,
  titlesLoaded: false,
  discoRectos: [],
  discoVersos: [],
};

/**
 * Types
 */
// SECTIONS Export
export const LOAD_SECTION_TITLES = 'LOAD_SECTION_TITLES';
export const RECEIVED_SECTION_TITLE = 'RECEIVED_SECTION_TITLE';
export const LOAD_SECTION_BG_PICTURES = 'LOAD_SECTION_BG_PICTURES';
export const RECEIVED_SECTION_BG_PICTURES = 'RECEIVED_SECTION_BG_PICTURES';
// NEWS Export
export const LOAD_NEWS = 'LOAD_NEWS';
export const RECEIVED_NEWS = 'RECEIVED_NEWS';
// TOUR Export
export const LOAD_TOUR_DATES = 'LOAD_TOUR_DATES';
export const RECEIVED_TOUR_DATES = 'RECEIVED_TOUR_DATES';
// DISCO Export
export const LOAD_SECTION_DISCO = 'LOAD_DISCO_NAME';
export const RECEIVED_SECTION_DISCO = 'RECEIVED_SECTION_DISCO';
export const LOAD_DISCO_RECTOS = 'LOAD_DISCO_RECTOS';
export const RECEIVED_DISCO_RECTOS = 'RECEIVED_DISCO_RECTOS';
export const LOAD_DISCO_VERSOS = 'LOAD_DISCO_VERSOS';
export const RECEIVED_DISCO_VERSOS = 'RECEIVED_DISCO_VERSOS';
// Media Import
export const LOAD_VIDEOS = 'LOAD_VIDEOS';
export const RECEIVED_VIDEOS = 'RECEIVED_VIDEOS';
export const LOAD_PICTURES = 'LOAD_PICTURES';
export const RECEIVED_PICTURES = 'RECEIVED_PICTURES';
// ABOUT Export
export const LOAD_SECTION_ABOUT = 'LOAD_SECTION_ABOUT';
export const RECEIVED_SECTION_ABOUT = 'RECEIVED_SECTION_ABOUT';
export const LOAD_SECTION_ABOUT_DESCRIPTION = 'LOAD_SECTION_ABOUT_DESCRIPTION';
export const RECEIVED_SECTION_ABOUT_DESCRIPTION = 'RECEIVED_SECTION_ABOUT_DESCRIPTION';
export const LOAD_SECTION_BACKGROUND = 'LOAD_SECTION_BACKGROUND';
export const RECEIVED_SECTION_BACKGROUND = 'RECEIVED_SECTION_BACKGROUND';
// CONTACT Export

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_SECTION_TITLES:
      return {
        ...state,
      };

    case RECEIVED_SECTION_TITLE:
      return {
        ...state,
        loadedData: {
          ...state.loadedData,
          sectionTitles: true,
        },
        sectionTitles: action.data,
        titlesLoaded: true,
      };

      // NEWS SECTION

    case LOAD_NEWS:
      return {
        ...state,
      };

    case RECEIVED_NEWS:
      return {
        ...state,
        loadedData: {
          ...state.loadedData,
          newsLoaded: true,
        },
        news: freshNews(action.data),
      };

      // TOUR SECTION

    case LOAD_TOUR_DATES:
      return {
        ...state,
      };

    case RECEIVED_TOUR_DATES:
      return {
        ...state,
        loadedData: {
          ...state.loadedData,
          tourdates: true,
        },
        tourDates: cleanTourDates(action.data),
      };

      // DISCO SECTION

    case LOAD_SECTION_DISCO:
      return {
        ...state,
      };

    case RECEIVED_SECTION_DISCO:
      return {
        ...state,
        sectionDisco: action.data,
      };

    case LOAD_DISCO_RECTOS:
      return {
        ...state,
      };

    case RECEIVED_DISCO_RECTOS:
      return {
        ...state,
        discoRectos: action.data,
      };

    case LOAD_DISCO_VERSOS:
      return {
        ...state,
      };

    case RECEIVED_DISCO_VERSOS:
      return {
        ...state,
        discoVersos: action.data,
      };

      // ABOUT SECTION

    case LOAD_SECTION_ABOUT:
      return {
        ...state,
      };

    case RECEIVED_SECTION_ABOUT:
      return {
        ...state,
        sectionAbout: action.data,
      };

    case LOAD_SECTION_ABOUT_DESCRIPTION:
      return {
        ...state,
      };

    case RECEIVED_SECTION_ABOUT_DESCRIPTION:
      return {
        ...state,
        sectionAboutDescription: action.data,
        aboutLoaded: true,
      };

      // BACKGROUND SECTION PICTURES

    case LOAD_SECTION_BACKGROUND:
      return {
        ...state,
      };

    case RECEIVED_SECTION_BACKGROUND:
      return {
        ...state,
        sectionBackground: action.data,
        backgroundLoaded: true,
      };

      // MEDIA PHOTO GALLERY

    case LOAD_PICTURES:
      return {
        ...state,
      };

    case RECEIVED_PICTURES:
      return {
        ...state,
        loadedData: {
          ...state.loadedData,
          mediaPictures: true,
        },
        gallery: action.data,
      };

      // MEDIA VIDEOS GALLERY
    case LOAD_VIDEOS:
      return {
        ...state,
      };

    case RECEIVED_VIDEOS:
      return {
        ...state,
        loadedData: {
          ...state.loadedData,
          vidLoaded: true,
        },
        videos: videoIds(action.data),
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */

// Sections Import
export const loadSectionTitles = () => ({
  type: LOAD_SECTION_TITLES,
});

export const receivedSectionTitles = data => ({
  type: RECEIVED_SECTION_TITLE,
  data,
});

export const loadSectionBgPictures = () => ({
  type: LOAD_SECTION_BG_PICTURES,
});

export const receivedSectionBgPictures = data => ({
  type: RECEIVED_SECTION_BG_PICTURES,
  data,
});

// News Import
export const loadNews = () => ({
  type: LOAD_NEWS,
});

export const receivedNews = data => ({
  type: RECEIVED_NEWS,
  data,
});


// Tour Import
export const loadTourDates = () => ({
  type: LOAD_TOUR_DATES,
});

export const receivedTourDates = data => ({
  type: RECEIVED_TOUR_DATES,
  data,
});

// Disco Import

export const loadSectionDisco = () => ({
  type: LOAD_SECTION_DISCO,
});

export const receivedSectionDisco = data => ({
  type: RECEIVED_SECTION_DISCO,
  data,
});

export const loadDiscoRectos = () => ({
  type: LOAD_DISCO_RECTOS,
});

export const receiveddiscoRectos = data => ({
  type: RECEIVED_DISCO_RECTOS,
  data,
});

export const loadDiscoVersos = () => ({
  type: LOAD_DISCO_VERSOS,
});

export const receiveddiscoVersos = data => ({
  type: RECEIVED_DISCO_VERSOS,
  data,
});

// About Import

export const loadSectionAbout = () => ({
  type: LOAD_SECTION_ABOUT,
});

export const receivedSectionAbout = data => ({
  type: RECEIVED_SECTION_ABOUT,
  data,
});

export const loadSectionAboutDescription = () => ({
  type: LOAD_SECTION_ABOUT_DESCRIPTION,
});

export const receivedSectionAboutDescription = data => ({
  type: RECEIVED_SECTION_ABOUT_DESCRIPTION,
  data,
});

export const loadSectionBackground = () => ({
  type: LOAD_SECTION_BACKGROUND,
});

export const receivedSectionBackground = data => ({
  type: RECEIVED_SECTION_BACKGROUND,
  data,
});

// Media Import
export const loadPictures = () => ({
  type: LOAD_PICTURES,
});

export const receivedPictures = data => ({
  type: RECEIVED_PICTURES,
  data,
});

export const loadVideos = () => ({
  type: LOAD_VIDEOS,
});

export const receivedVideos = data => ({
  type: RECEIVED_VIDEOS,
  data,
});

/**
 * Selectors
 */


/**
 * Export
 */
export default reducer;
