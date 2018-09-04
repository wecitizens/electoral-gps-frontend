/* eslint-disable */
const config = {
  app: {
    title: 'GPS électoral'
  },
  association: {
  	name: 'WeCitizens'
  },
  district: {
    what_is_your_postcode: 'Quel est ton code postal ?',
    help_customise_survey: 'Ceci nous aidera à personnaliser ton questionnaire'
  },
  importance: {
    '1': 'Pas important',
    '2': 'Peu important',
    '3': 'Moyen',
    '4': 'Important',
    '5': 'Très important'
  },
  home: {
    title: 'Trouve les candidats qui te correspondent',
    cta: 'Je fais le test!',
    description: 'Déjà {userCount} matchs',
    with_help_from: 'Avec le soutient de :',
    powered_by: 'Powered by:'
  },
  menu: {
  	item: {
      welcome: 'Accueil',
      go_to_results: 'Sauter aux résultats',
      share_app: 'Partager le {{app.title}}',
      share_results: 'Partager mes résultats',
      see_all_questions: 'Voir toutes les questions',
      start_from_scratch: 'Recommencer à zéro',
      about_app: 'À propos du {{app.title}}',
      about_association: 'À propos de {{association.name}}',
      municipality: 'Commune',
      questions: 'Questions',
      stats: 'Stats',
      results: 'Résultats'
  	}
  },
  results: {
  	candatidates_sharing_my_position_the_most: 'Les candidats qui partagent le plus mes convictions'
  },
  stats: {
    anonymous_question_to_improve_service: 'Ces dernières questions restent anonymes et nous permettent d’améliorer notre service',
    less_than_35: '-35 ans',
    between_35_and_55: '35 à 55',
    over_55: '+ 55 ans'
  },
  button: {
    lets_go: 'C\'est parti',
    see_results: 'Voir les résultats',
    previous_question: 'Previous Question',
    more_info: '+ more infos'
  },
  title: {
  	candidates: 'Candidats',
  	parties: 'Listes'
  },
  input: {
    place_holder: {
      your_postcode: 'Ton code postal'
    }
  }
}

module.exports = config
