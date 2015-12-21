function showChar(name){
	var c = charDict[name];

	$("#char_desc").hide();

	var cimg = $("#charDisplayDiv .char_image");
	cimg.show();
	cimg.attr('title', c[0]);
	cimg.attr('src', '/img/'+name+'.png');

	var cdesc = $("#charDisplayDiv .char_desc");
	cdesc.hide();
	cdesc.html('<center><b style="font-size:18pt;">'+c[0]+'</b></center><br>');
	c[1].forEach(function(element, index, array){
		cdesc.append('<p>'+element+'</p>');
	});

	$.pgwModal({
		target: '#charDisplayDiv',
		loadingContent: '<span style=\"text-align:center\">Loading character profile...</span>',
		titleBar: false
	});
}
function toggleCharBio(){
	$("#pgwModal .char_image").toggle();
	$("#pgwModal .char_desc").toggle();
}

var charDict = {
	suoh: ['Suoh Tesla', [
	    'Protagonist of Sickness.',
		'Suoh is a recently-orphaned youth with a violent past.',
		'Following the deaths of his parents, Suoh takes it upon himself to take care of his twin sister, Sara, despite not having a job or source of income.',
		"Faced with increasing costs and responsibilities, Suoh is tempted into a life of crime, bringing about a sudden and drastic change in lifestyle.",
		'As his new life proves to be one to which he is well-suited, Suoh happily walks down a bloody path of corruption and violence, all the while protecting the pleasant, naive life his sister lives.'
	]],
	sara: ['Sara Tesla', [
		"Suoh's twin sister.",
		"Sara is a high school student who harbors complex feelings towards her brother.",
		'To Suoh, Sara is an angelic sister with a loving nature and endless affection; an image she cultivates and builds on daily.',
		'To everyone else, however, Sara is narcissistic and thoroughly two-faced.',
		"Family aside, Sara doesn't care for other people in the slightest, and as a result of her desperately trying to hide this fact, her family mistakenly believe Sara to be bipolar."
	]],
	lucia: ['Lucia Kaye', [
		'Sara\'s "friend" from school.',
		'Lucia is an honor student with deep-seated social issues.',
		"Brought up in a strict household of high expectations, Lucia craves excitement to the point where she'll risk life and limb to attain it.",
		'Contrary to her outwardly-reserved nature, Lucia thrives in the face of the abnormal, seeking out excitement without regard for her own well-being.',
		"When facing real danger, however, Lucia retreats into the safety of her own mind, sometimes losing herself so completely that she can no longer discern between fiction and reality."
	]],
	cecilia: ['Cecilia Cresent', [
		"Suoh's first and only friend.",
		"Cecilia is a tomboy who sometimes grows too emotional for her own good.",
		"Aside from her tendency to burst into tears and get emotional over trivial matters, Cecilia's nature overlaps with Suoh's surprisingly well.",
		"Cecilia is very down-to-earth, and she is one of the only people Suoh can talk to honestly and without reservation. Similarly, thanks to her fear of being rejected by others, Cecilia feels that Suoh is the only person with whom she doesn't need to watch what she says.",
		'Coming from a broken home, Cecilia is always mindful of others, and she desperately seeks affection and approval to the point where she will blindly and naively believe in the words of others.'
	]],
	misa: ['Misa', [
		'A professional killer working for Karasu.',
		'Misa is a teenage girl who wishes for a life without bloodshed.',
		'As the daughter of a professional killer (and protective father), Misa has trained from a young age in order to protect herself from the dangers of the world.',
		"However, as her father's work inevitably absorbed her life, Misa adapted her skillset to match those of a killer, using her youth and small figure to become the youngest and most discreet killer among her peers.",
		"Outside of work, Misa is still just a young girl. She's very friendly, once she warms up to someone, and is protective of those close to her."
	]],
	sai: ['Sai', [
		"Misa's father, and Karasu's right-hand man.",
		"Sai is Karasu's most trusted and capable employee, responsible for overseeing his most lucrative business ventures, despite always working in the shadows.",
		'Unrivaled in what he does, Sai is a ruthless killer who feels no remorse; those who get on his bad side seldom live long enough to realize it.',
		"The only things more important to Sai than his work are his daughter's well-being and happiness."
	]],
	karasu: ['Karasu', [
		'Up and coming crimelord of Richmond.',
		'Karasu builds his wealth through a variety of "services", including, but not limited to, gambling, corporate espionage, and organ trafficking.',
		'Above all, however, Karasu is most infamous for providing "waste disposal" for neighboring towns, whether they request his services or not.',
		'His ultimate goal is to build an empire he can share with his beloved "children"; interesting individuals he has taken under his wing and granted a new lease on life.',
		'Though many view him as a sadistic narcissist who will stop at nothing to obtain what he wants, Karasu is ultimately a simple businessman who displays affection only for a chosen few.'
	]]
};