export enum OpCode {
  /**********
   * BLOCKS *
   **********/
  motion_movesteps = "motion_movesteps",
  motion_turnright = "motion_turnright",
  motion_turnleft = "motion_turnleft",
  motion_goto = "motion_goto",
  motion_gotoxy = "motion_gotoxy",
  motion_glideto = "motion_glideto",
  motion_glidesecstoxy = "motion_glidesecstoxy",
  motion_pointindirection = "motion_pointindirection",
  motion_pointtowards = "motion_pointtowards",
  motion_changexby = "motion_changexby",
  motion_setx = "motion_setx",
  motion_changeyby = "motion_changeyby",
  motion_sety = "motion_sety",
  motion_ifonedgebounce = "motion_ifonedgebounce",
  motion_setrotationstyle = "motion_setrotationstyle",
  motion_xposition = "motion_xposition",
  motion_yposition = "motion_yposition",
  motion_direction = "motion_direction",

  looks_sayforsecs = "looks_sayforsecs",
  looks_say = "looks_say",
  looks_thinkforsecs = "looks_thinkforsecs",
  looks_think = "looks_think",
  looks_switchcostumeto = "looks_switchcostumeto",
  looks_nextcostume = "looks_nextcostume",
  looks_switchbackdropto = "looks_switchbackdropto",
  looks_nextbackdrop = "looks_nextbackdrop",
  looks_changesizeby = "looks_changesizeby",
  looks_setsizeto = "looks_setsizeto",
  looks_changeeffectby = "looks_changeeffectby",
  looks_seteffectto = "looks_seteffectto",
  looks_cleargraphiceffects = "looks_cleargraphiceffects",
  looks_show = "looks_show",
  looks_hide = "looks_hide",
  looks_gotofrontback = "looks_gotofrontback",
  looks_goforwardbackwardlayers = "looks_goforwardbackwardlayers",
  looks_costumenumbername = "looks_costumenumbername",
  looks_backdropnumbername = "looks_backdropnumbername",
  looks_size = "looks_size",

  sound_playuntildone = "sound_playuntildone",
  sound_play = "sound_play",
  sound_stopallsounds = "sound_stopallsounds",
  sound_changeeffectby = "sound_changeeffectby",
  sound_seteffectto = "sound_seteffectto",
  sound_cleareffects = "sound_cleareffects",
  sound_changevolumeby = "sound_changevolumeby",
  sound_setvolumeto = "sound_setvolumeto",
  sound_volume = "sound_volume",

  event_whenflagclicked = "event_whenflagclicked",
  event_whenkeypressed = "event_whenkeypressed",
  event_whenthisspriteclicked = "event_whenthisspriteclicked",
  event_whenbackdropswitchesto = "event_whenbackdropswitchesto",
  event_whengreaterthan = "event_whengreaterthan",
  event_whenbroadcastreceived = "event_whenbroadcastreceived",
  event_broadcast = "event_broadcast",
  event_broadcastandwait = "event_broadcastandwait",

  control_wait = "control_wait",
  control_repeat = "control_repeat",
  control_forever = "control_forever",
  control_if = "control_if",
  control_if_else = "control_if_else",
  control_wait_until = "control_wait_until",
  control_repeat_until = "control_repeat_until",
  control_stop = "control_stop",
  control_start_as_clone = "control_start_as_clone",
  control_create_clone_of = "control_create_clone_of",
  control_delete_this_clone = "control_delete_this_clone",

  sensing_touchingobject = "sensing_touchingobject",
  sensing_touchingcolor = "sensing_touchingcolor",
  sensing_coloristouchingcolor = "sensing_coloristouchingcolor",
  sensing_distanceto = "sensing_distanceto",
  sensing_askandwait = "sensing_askandwait",
  sensing_answer = "sensing_answer",
  sensing_keypressed = "sensing_keypressed",
  sensing_mousedown = "sensing_mousedown",
  sensing_mousex = "sensing_mousex",
  sensing_mousey = "sensing_mousey",
  sensing_setdragmode = "sensing_setdragmode",
  sensing_loudness = "sensing_loudness",
  sensing_timer = "sensing_timer",
  sensing_resettimer = "sensing_resettimer",
  sensing_of = "sensing_of",
  sensing_current = "sensing_current",
  sensing_dayssince2000 = "sensing_dayssince2000",
  sensing_username = "sensing_username",

  operator_add = "operator_add",
  operator_subtract = "operator_subtract",
  operator_multiply = "operator_multiply",
  operator_divide = "operator_divide",
  operator_random = "operator_random",
  operator_gt = "operator_gt",
  operator_lt = "operator_lt",
  operator_equals = "operator_equals",
  operator_and = "operator_and",
  operator_or = "operator_or",
  operator_not = "operator_not",
  operator_join = "operator_join",
  operator_letter_of = "operator_letter_of",
  operator_length = "operator_length",
  operator_contains = "operator_contains",
  operator_mod = "operator_mod",
  operator_round = "operator_round",
  operator_mathop = "operator_mathop",

  data_variable = "data_variable",
  data_setvariableto = "data_setvariableto",
  data_changevariableby = "data_changevariableby",
  data_showvariable = "data_showvariable",
  data_hidevariable = "data_hidevariable",
  data_listcontents = "data_listcontents",
  data_addtolist = "data_addtolist",
  data_deleteoflist = "data_deleteoflist",
  data_deletealloflist = "data_deletealloflist",
  data_insertatlist = "data_insertatlist",
  data_replaceitemoflist = "data_replaceitemoflist",
  data_itemoflist = "data_itemoflist",
  data_itemnumoflist = "data_itemnumoflist",
  data_lengthoflist = "data_lengthoflist",
  data_listcontainsitem = "data_listcontainsitem",
  data_showlist = "data_showlist",
  data_hidelist = "data_hidelist",

  procedures_definition = "procedures_definition",
  procedures_prototype = "procedures_prototype",
  argument_reporter_boolean = "argument_reporter_boolean",
  argument_reporter_string_number = "argument_reporter_string_number",
  procedures_call = "procedures_call",

  // Extensions
  music_playDrumForBeats = "music_playDrumForBeats",
  music_restForBeats = "music_restForBeats",
  music_playNoteForBeats = "music_playNoteForBeats",
  music_setInstrument = "music_setInstrument",
  music_setTempo = "music_setTempo",
  music_changeTempo = "music_changeTempo",
  music_getTempo = "music_getTempo",

  pen_clear = "pen_clear",
  pen_stamp = "pen_stamp",
  pen_penDown = "pen_penDown",
  pen_penUp = "pen_penUp",
  pen_setPenColorToColor = "pen_setPenColorToColor",
  pen_changePenColorParamBy = "pen_changePenColorParamBy",
  pen_setPenColorParamTo = "pen_setPenColorParamTo",
  pen_changePenSizeBy = "pen_changePenSizeBy",
  pen_setPenSizeTo = "pen_setPenSizeTo",

  videoSensing_whenMotionGreaterThan = "videoSensing_whenMotionGreaterThan",
  videoSensing_videoOn = "videoSensing_videoOn",
  videoSensing_videoToggle = "videoSensing_videoToggle",
  videoSensing_setVideoTransparency = "videoSensing_setVideoTransparency",

  wedo2_motorOnFor = "wedo2_motorOnFor",
  wedo2_motorOn = "wedo2_motorOn",
  wedo2_motorOff = "wedo2_motorOff",
  wedo2_startMotorPower = "wedo2_startMotorPower",
  wedo2_setMotorDirection = "wedo2_setMotorDirection",
  wedo2_setLightHue = "wedo2_setLightHue",
  wedo2_whenDistance = "wedo2_whenDistance",
  wedo2_whenTilted = "wedo2_whenTilted",
  wedo2_getDistance = "wedo2_getDistance",
  wedo2_isTilted = "wedo2_isTilted",
  wedo2_getTiltAngle = "wedo2_getTiltAngle",

  // Deprecated
  motion_scroll_right = "motion_scroll_right",
  motion_scroll_up = "motion_scroll_up",
  motion_align_scene = "motion_align_scene",
  motion_xscroll = "motion_xscroll",
  motion_yscroll = "motion_yscroll",

  looks_hideallsprites = "looks_hideallsprites",
  looks_switchbackdroptoandwait = "looks_switchbackdroptoandwait",
  looks_changestretchby = "looks_changestretchby",
  looks_setstretchto = "looks_setstretchto",

  control_while = "control_while",
  control_for_each = "control_for_each",
  control_get_counter = "control_get_counter",
  control_incr_counter = "control_incr_counter",
  control_clear_counter = "control_clear_counter",
  control_all_at_once = "control_all_at_once",
  sensing_userid = "sensing_userid",

  sensing_loud = "sensing_loud",

  music_midiPlayDrumForBeats = "music_midiPlayDrumForBeats",
  music_midiSetInstrument = "music_midiSetInstrument",

  pen_setPenShadeToNumber = "pen_setPenShadeToNumber",
  pen_changePenShadeBy = "pen_changePenShadeBy",
  pen_setPenHueToNumber = "pen_setPenHueToNumber",
  pen_changePenHueBy = "pen_changePenHueBy",

  wedo2_playNoteFor = "wedo2_playNoteFor",

  /*********
   * MENUS *
   *********/
  motion_pointtowards_menu = "motion_pointtowards_menu",
  motion_glideto_menu = "motion_glideto_menu",
  motion_goto_menu = "motion_goto_menu",

  looks_costume = "looks_costume",
  looks_backdrops = "looks_backdrops",

  sound_sounds_menu = "sound_sounds_menu",

  control_create_clone_of_menu = "control_create_clone_of_menu",

  sensing_touchingobjectmenu = "sensing_touchingobjectmenu",
  sensing_distancetomenu = "sensing_distancetomenu",
  sensing_keyoptions = "sensing_keyoptions",
  sensing_of_object_menu = "sensing_of_object_menu",

  pen_menu_colorParam = "pen_menu_colorParam"
}
