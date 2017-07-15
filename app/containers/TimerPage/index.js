import { connect } from 'react-redux';
import Timer from '../components/Timer';
//Render out edit form
r//Render out edit form
router.get('/:game/:category/edit', function (req, res) {
	var game = req.params.game;
	var category = req.params.category;
	
	sequelize.query("SELECT id FROM games WHERE nickname = ?",
		{ replacements: [game], type: sequelize.QueryTypes.SELECT })
		.then((game_id) => {
			console.log(game_id);
			sequelize.query("SELECT id FROM categories WHERE category = ?",
				{ replacements: [category], type: sequelize.QueryTypes.SELECT })
				.then((category_id) => {
					console.log(category_id);
					sequelize.query("SELECT game_categories.id FROM game_categories WHERE ? = game_categories.game_id AND ? = game_categories.category_id",
						{ replacements: [game_id[0].id, category_id[0].id], type: sequelize.QueryTypes.SELECT })
						.then((id) => {
							console.log(id)
							sequelize.query("SELECT game_contents.content FROM game_contents WHERE game_contents.game_categories_id = ?",
								{ replacements: [id[0].id], type: sequelize.QueryTypes.SELECT }).then((content) => {
									console.log(content);
									res.render('content_edit', {
										game: game,
										category: category,
										content: content[0].content
									})
								})
						});
				});
		});
});outer.get('/:game/:category/edit', function (req, res) {
	var game = req.params.game;
	var category = req.params.category;
	
	sequelize.query("SELECT id FROM games WHERE nickname = ?",
		{ replacements: [game], type: sequelize.QueryTypes.SELECT })
		.then((game_id) => {
			console.log(game_id);
			sequelize.query("SELECT id FROM categories WHERE category = ?",
				{ replacements: [category], type: sequelize.QueryTypes.SELECT })
				.then((category_id) => {
					console.log(category_id);
					sequelize.query("SELECT game_categories.id FROM game_categories WHERE ? = game_categories.game_id AND ? = game_categories.category_id",
						{ replacements: [game_id[0].id, category_id[0].id], type: sequelize.QueryTypes.SELECT })
						.then((id) => {
							console.log(id)
							sequelize.query("SELECT game_contents.content FROM game_contents WHERE game_contents.game_categories_id = ?",
								{ replacements: [id[0].id], type: sequelize.QueryTypes.SELECT }).then((content) => {
									console.log(content);
									res.render('content_edit', {
										game: game,
										category: category,
										content: content[0].content
									})
								})
						});
				});
		});
});
const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
