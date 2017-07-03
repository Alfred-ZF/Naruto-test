app.get('/getCard', function(req, res) {

	var src = [
		{
			img: 'img/jcb1.jpg',
			title: '第一部',
			brif:  '火影忍者：大活剧！雪姬忍法帖！！'
		},
		{
			img: 'img/jcb2.jpg',
			title: '第二部',
			brif: '火影忍者：大激突！幻之地底遗迹'
		},
		{
			img: 'img/jcb3.jpg',
			title: '第三部',
			brif: '火影忍者：三日月岛的动物骚动'
		},
		{
			img: 'img/jcb4.jpg',
			title: '第四部',
			brif: '火影忍者疾风传：鸣人之死'
		},
		{
			img: 'img/jcb5.jpg',
			title: '第五部',
			brif: '火影忍者：羁绊'
		},
		{
			img: 'img/jcb6.jpg',
			title: '第六部',
			brif: '火影忍者疾风传：火之意志继承者'
		},
    {
			img: 'img/jcb7.jpg',
			title: '第七部',
			brif:  '火影忍者疾风传：失落之塔'
		},
		{
			img: 'img/jcb8.jpg',
			title: '第八部',
			brif: '火影忍者：血狱'
		},
		{
			img: 'img/jcb9.jpg',
			title: '第九部',
			brif: '火影忍者剧场版：忍者之路'
		},
		{
			img: 'img/jcb10.jpg',
			title: '第十部',
			brif: '火影忍者剧场版：THE LAST'
		},
		{
			img: 'img/jcb11.jpg',
			title: '第十一部',
			brif: '火影忍者剧场版：博人传'
		},
		{
			img: 'img/jcb1.jpg',
			title: '第一部',
			brif:  '火影忍者：大活剧！雪姬忍法帖！！'
		},
		{
			img: 'img/jcb2.jpg',
			title: '第二部',
			brif: '火影忍者：大激突！幻之地底遗迹'
		},
		{
			img: 'img/jcb3.jpg',
			title: '第三部',
			brif: '火影忍者：三日月岛的动物骚动'
		},
		{
			img: 'img/jcb4.jpg',
			title: '第四部',
			brif: '火影忍者疾风传：鸣人之死'
		},
		{
			img: 'img/jcb5.jpg',
			title: '第五部',
			brif: '火影忍者：羁绊'
		},
		{
			img: 'img/jcb6.jpg',
			title: '第六部',
			brif: '火影忍者疾风传：火之意志继承者'
		},
    {
			img: 'img/jcb7.jpg',
			title: '第七部',
			brif:  '火影忍者疾风传：失落之塔'
		},
		{
			img: 'img/jcb8.jpg',
			title: '第八部',
			brif: '火影忍者：血狱'
		},
		{
			img: 'img/jcb9.jpg',
			title: '第九部',
			brif: '火影忍者剧场版：忍者之路'
		},
		{
			img: 'img/jcb10.jpg',
			title: '第十部',
			brif: '火影忍者剧场版：THE LAST'
		},
		{
			img: 'img/jcb11.jpg',
			title: '第十一部',
			brif: '火影忍者剧场版：博人传'
		},
		{
			img: 'img/jcb1.jpg',
			title: '第一部',
			brif:  '火影忍者：大活剧！雪姬忍法帖！！'
		},
		{
			img: 'img/jcb2.jpg',
			title: '第二部',
			brif: '火影忍者：大激突！幻之地底遗迹'
		},
		{
			img: 'img/jcb3.jpg',
			title: '第三部',
			brif: '火影忍者：三日月岛的动物骚动'
		},
		{
			img: 'img/jcb4.jpg',
			title: '第四部',
			brif: '火影忍者疾风传：鸣人之死'
		},
		{
			img: 'img/jcb5.jpg',
			title: '第五部',
			brif: '火影忍者：羁绊'
		},
		{
			img: 'img/jcb6.jpg',
			title: '第六部',
			brif: '火影忍者疾风传：火之意志继承者'
		},
    {
			img: 'img/jcb7.jpg',
			title: '第七部',
			brif:  '火影忍者疾风传：失落之塔'
		},
		{
			img: 'img/jcb8.jpg',
			title: '第八部',
			brif: '火影忍者：血狱'
		},
		{
			img: 'img/jcb9.jpg',
			title: '第九部',
			brif: '火影忍者剧场版：忍者之路'
		},
		{
			img: 'img/jcb10.jpg',
			title: '第十部',
			brif: '火影忍者剧场版：THE LAST'
		},
		{
			img: 'img/jcb11.jpg',
			title: '第十一部',
			brif: '火影忍者剧场版：博人传'
		},
		{
			img: 'img/jcb1.jpg',
			title: '第一部',
			brif:  '火影忍者：大活剧！雪姬忍法帖！！'
		},
		{
			img: 'img/jcb2.jpg',
			title: '第二部',
			brif: '火影忍者：大激突！幻之地底遗迹'
		},
		{
			img: 'img/jcb3.jpg',
			title: '第三部',
			brif: '火影忍者：三日月岛的动物骚动'
		},
		{
			img: 'img/jcb4.jpg',
			title: '第四部',
			brif: '火影忍者疾风传：鸣人之死'
		},
		{
			img: 'img/jcb5.jpg',
			title: '第五部',
			brif: '火影忍者：羁绊'
		},
		{
			img: 'img/jcb6.jpg',
			title: '第六部',
			brif: '火影忍者疾风传：火之意志继承者'
		},
    {
			img: 'img/jcb7.jpg',
			title: '第七部',
			brif:  '火影忍者疾风传：失落之塔'
		},
		{
			img: 'img/jcb8.jpg',
			title: '第八部',
			brif: '火影忍者：血狱'
		},
		{
			img: 'img/jcb9.jpg',
			title: '第九部',
			brif: '火影忍者剧场版：忍者之路'
		},
		{
			img: 'img/jcb10.jpg',
			title: '第十部',
			brif: '火影忍者剧场版：THE LAST'
		},
		{
			img: 'img/jcb11.jpg',
			title: '第十一部',
			brif: '火影忍者剧场版：博人传'
		},
		{
			img: 'img/jcb1.jpg',
			title: '第一部',
			brif:  '火影忍者：大活剧！雪姬忍法帖！！'
		},
		{
			img: 'img/jcb2.jpg',
			title: '第二部',
			brif: '火影忍者：大激突！幻之地底遗迹'
		},
		{
			img: 'img/jcb3.jpg',
			title: '第三部',
			brif: '火影忍者：三日月岛的动物骚动'
		},
		{
			img: 'img/jcb4.jpg',
			title: '第四部',
			brif: '火影忍者疾风传：鸣人之死'
		},
		{
			img: 'img/jcb5.jpg',
			title: '第五部',
			brif: '火影忍者：羁绊'
		},
		{
			img: 'img/jcb6.jpg',
			title: '第六部',
			brif: '火影忍者疾风传：火之意志继承者'
		},
    {
			img: 'img/jcb7.jpg',
			title: '第七部',
			brif:  '火影忍者疾风传：失落之塔'
		},
		{
			img: 'img/jcb8.jpg',
			title: '第八部',
			brif: '火影忍者：血狱'
		},
		{
			img: 'img/jcb9.jpg',
			title: '第九部',
			brif: '火影忍者剧场版：忍者之路'
		},
		{
			img: 'img/jcb10.jpg',
			title: '第十部',
			brif: '火影忍者剧场版：THE LAST'
		},
		{
			img: 'img/jcb11.jpg',
			title: '第十一部',
			brif: '火影忍者剧场版：博人传'
		}
	]

	var pageIndex = req.query.page;
	var len = 8;

	var retNews = 	src.slice(pageIndex*len, pageIndex*len+len); //0, 3;  3, 6
	
	res.send({
		status: 0,
		data: retNews
	});
});
