/* eslint-disable */
// ============================================================
// ⚠️ 自动生成文件，请勿手动修改！
// 生成器：scripts/generate-edgeone-manifest.js
// 重新生成：node scripts/generate-edgeone-manifest.js
//
// 用途：EdgeOne 云函数（Serverless 打包环境）没有 module/ 目录，
//       用本静态清单替代运行时的目录扫描与动态 require，
//       使全部接口模块在打包时被静态内联。
// 懒加载：所有 require 都放在 getter 中，模块在首次被访问时才加载。
// ============================================================
const files = {
  get "activate_init_profile.js"() {
    return require('../module/activate_init_profile.js')
  },
  get "ad_get.js"() {
    return require('../module/ad_get.js')
  },
  get "ad_listening_rights.js"() {
    return require('../module/ad_listening_rights.js')
  },
  get "ad_listening_rights_gain.js"() {
    return require('../module/ad_listening_rights_gain.js')
  },
  get "aidj_content_rcmd.js"() {
    return require('../module/aidj_content_rcmd.js')
  },
  get "album.js"() {
    return require('../module/album.js')
  },
  get "album_detail.js"() {
    return require('../module/album_detail.js')
  },
  get "album_detail_dynamic.js"() {
    return require('../module/album_detail_dynamic.js')
  },
  get "album_list.js"() {
    return require('../module/album_list.js')
  },
  get "album_list_style.js"() {
    return require('../module/album_list_style.js')
  },
  get "album_new.js"() {
    return require('../module/album_new.js')
  },
  get "album_newest.js"() {
    return require('../module/album_newest.js')
  },
  get "album_privilege.js"() {
    return require('../module/album_privilege.js')
  },
  get "album_songsaleboard.js"() {
    return require('../module/album_songsaleboard.js')
  },
  get "album_sub.js"() {
    return require('../module/album_sub.js')
  },
  get "album_sublist.js"() {
    return require('../module/album_sublist.js')
  },
  get "api.js"() {
    return require('../module/api.js')
  },
  get "artist_album.js"() {
    return require('../module/artist_album.js')
  },
  get "artist_desc.js"() {
    return require('../module/artist_desc.js')
  },
  get "artist_detail.js"() {
    return require('../module/artist_detail.js')
  },
  get "artist_detail_dynamic.js"() {
    return require('../module/artist_detail_dynamic.js')
  },
  get "artist_fans.js"() {
    return require('../module/artist_fans.js')
  },
  get "artist_follow_count.js"() {
    return require('../module/artist_follow_count.js')
  },
  get "artist_list.js"() {
    return require('../module/artist_list.js')
  },
  get "artist_mv.js"() {
    return require('../module/artist_mv.js')
  },
  get "artist_new_mv.js"() {
    return require('../module/artist_new_mv.js')
  },
  get "artist_new_song.js"() {
    return require('../module/artist_new_song.js')
  },
  get "artist_new_song_mv_list_v2.js"() {
    return require('../module/artist_new_song_mv_list_v2.js')
  },
  get "artist_new_song_playall.js"() {
    return require('../module/artist_new_song_playall.js')
  },
  get "artist_songs.js"() {
    return require('../module/artist_songs.js')
  },
  get "artist_sub.js"() {
    return require('../module/artist_sub.js')
  },
  get "artist_sublist.js"() {
    return require('../module/artist_sublist.js')
  },
  get "artist_top_song.js"() {
    return require('../module/artist_top_song.js')
  },
  get "artist_video.js"() {
    return require('../module/artist_video.js')
  },
  get "artists.js"() {
    return require('../module/artists.js')
  },
  get "audio_match.js"() {
    return require('../module/audio_match.js')
  },
  get "avatar_upload.js"() {
    return require('../module/avatar_upload.js')
  },
  get "banner.js"() {
    return require('../module/banner.js')
  },
  get "batch.js"() {
    return require('../module/batch.js')
  },
  get "broadcast_category_region_get.js"() {
    return require('../module/broadcast_category_region_get.js')
  },
  get "broadcast_channel_collect_list.js"() {
    return require('../module/broadcast_channel_collect_list.js')
  },
  get "broadcast_channel_currentinfo.js"() {
    return require('../module/broadcast_channel_currentinfo.js')
  },
  get "broadcast_channel_list.js"() {
    return require('../module/broadcast_channel_list.js')
  },
  get "broadcast_sub.js"() {
    return require('../module/broadcast_sub.js')
  },
  get "calendar.js"() {
    return require('../module/calendar.js')
  },
  get "captcha_safe_sent.js"() {
    return require('../module/captcha_safe_sent.js')
  },
  get "captcha_sent.js"() {
    return require('../module/captcha_sent.js')
  },
  get "captcha_sent_v1.js"() {
    return require('../module/captcha_sent_v1.js')
  },
  get "captcha_verify.js"() {
    return require('../module/captcha_verify.js')
  },
  get "cellphone_existence_check.js"() {
    return require('../module/cellphone_existence_check.js')
  },
  get "chart_detail.js"() {
    return require('../module/chart_detail.js')
  },
  get "chart_song_detail.js"() {
    return require('../module/chart_song_detail.js')
  },
  get "check_music.js"() {
    return require('../module/check_music.js')
  },
  get "cloud.js"() {
    return require('../module/cloud.js')
  },
  get "cloud_import.js"() {
    return require('../module/cloud_import.js')
  },
  get "cloud_lyric_get.js"() {
    return require('../module/cloud_lyric_get.js')
  },
  get "cloud_match.js"() {
    return require('../module/cloud_match.js')
  },
  get "cloud_upload_complete.js"() {
    return require('../module/cloud_upload_complete.js')
  },
  get "cloud_upload_token.js"() {
    return require('../module/cloud_upload_token.js')
  },
  get "cloudsearch.js"() {
    return require('../module/cloudsearch.js')
  },
  get "comment.js"() {
    return require('../module/comment.js')
  },
  get "comment_add.js"() {
    return require('../module/comment_add.js')
  },
  get "comment_album.js"() {
    return require('../module/comment_album.js')
  },
  get "comment_delete.js"() {
    return require('../module/comment_delete.js')
  },
  get "comment_dj.js"() {
    return require('../module/comment_dj.js')
  },
  get "comment_event.js"() {
    return require('../module/comment_event.js')
  },
  get "comment_floor.js"() {
    return require('../module/comment_floor.js')
  },
  get "comment_hot.js"() {
    return require('../module/comment_hot.js')
  },
  get "comment_hug_list.js"() {
    return require('../module/comment_hug_list.js')
  },
  get "comment_info_list.js"() {
    return require('../module/comment_info_list.js')
  },
  get "comment_like.js"() {
    return require('../module/comment_like.js')
  },
  get "comment_music.js"() {
    return require('../module/comment_music.js')
  },
  get "comment_mv.js"() {
    return require('../module/comment_mv.js')
  },
  get "comment_new.js"() {
    return require('../module/comment_new.js')
  },
  get "comment_playlist.js"() {
    return require('../module/comment_playlist.js')
  },
  get "comment_reply.js"() {
    return require('../module/comment_reply.js')
  },
  get "comment_report.js"() {
    return require('../module/comment_report.js')
  },
  get "comment_video.js"() {
    return require('../module/comment_video.js')
  },
  get "countries_code_list.js"() {
    return require('../module/countries_code_list.js')
  },
  get "creator_authinfo_get.js"() {
    return require('../module/creator_authinfo_get.js')
  },
  get "daily_signin.js"() {
    return require('../module/daily_signin.js')
  },
  get "decrypt.js"() {
    return require('../module/decrypt.js')
  },
  get "device_kickoff.js"() {
    return require('../module/device_kickoff.js')
  },
  get "device_list.js"() {
    return require('../module/device_list.js')
  },
  get "deviceinfo_center_upload.js"() {
    return require('../module/deviceinfo_center_upload.js')
  },
  get "digitalAlbum_detail.js"() {
    return require('../module/digitalAlbum_detail.js')
  },
  get "digitalAlbum_ordering.js"() {
    return require('../module/digitalAlbum_ordering.js')
  },
  get "digitalAlbum_purchased.js"() {
    return require('../module/digitalAlbum_purchased.js')
  },
  get "digitalAlbum_sales.js"() {
    return require('../module/digitalAlbum_sales.js')
  },
  get "djRadio_top.js"() {
    return require('../module/djRadio_top.js')
  },
  get "dj_banner.js"() {
    return require('../module/dj_banner.js')
  },
  get "dj_category_excludehot.js"() {
    return require('../module/dj_category_excludehot.js')
  },
  get "dj_category_recommend.js"() {
    return require('../module/dj_category_recommend.js')
  },
  get "dj_catelist.js"() {
    return require('../module/dj_catelist.js')
  },
  get "dj_detail.js"() {
    return require('../module/dj_detail.js')
  },
  get "dj_difm_all_style_channel.js"() {
    return require('../module/dj_difm_all_style_channel.js')
  },
  get "dj_difm_channel_subscribe.js"() {
    return require('../module/dj_difm_channel_subscribe.js')
  },
  get "dj_difm_channel_unsubscribe.js"() {
    return require('../module/dj_difm_channel_unsubscribe.js')
  },
  get "dj_difm_playing_tracks_list.js"() {
    return require('../module/dj_difm_playing_tracks_list.js')
  },
  get "dj_difm_subscribe_channels_get.js"() {
    return require('../module/dj_difm_subscribe_channels_get.js')
  },
  get "dj_hot.js"() {
    return require('../module/dj_hot.js')
  },
  get "dj_paygift.js"() {
    return require('../module/dj_paygift.js')
  },
  get "dj_personalize_recommend.js"() {
    return require('../module/dj_personalize_recommend.js')
  },
  get "dj_program.js"() {
    return require('../module/dj_program.js')
  },
  get "dj_program_detail.js"() {
    return require('../module/dj_program_detail.js')
  },
  get "dj_program_toplist.js"() {
    return require('../module/dj_program_toplist.js')
  },
  get "dj_program_toplist_hours.js"() {
    return require('../module/dj_program_toplist_hours.js')
  },
  get "dj_radio_hot.js"() {
    return require('../module/dj_radio_hot.js')
  },
  get "dj_recommend.js"() {
    return require('../module/dj_recommend.js')
  },
  get "dj_recommend_type.js"() {
    return require('../module/dj_recommend_type.js')
  },
  get "dj_sub.js"() {
    return require('../module/dj_sub.js')
  },
  get "dj_sublist.js"() {
    return require('../module/dj_sublist.js')
  },
  get "dj_subscriber.js"() {
    return require('../module/dj_subscriber.js')
  },
  get "dj_today_perfered.js"() {
    return require('../module/dj_today_perfered.js')
  },
  get "dj_toplist.js"() {
    return require('../module/dj_toplist.js')
  },
  get "dj_toplist_hours.js"() {
    return require('../module/dj_toplist_hours.js')
  },
  get "dj_toplist_newcomer.js"() {
    return require('../module/dj_toplist_newcomer.js')
  },
  get "dj_toplist_pay.js"() {
    return require('../module/dj_toplist_pay.js')
  },
  get "dj_toplist_popular.js"() {
    return require('../module/dj_toplist_popular.js')
  },
  get "eapi_decrypt.js"() {
    return require('../module/eapi_decrypt.js')
  },
  get "event.js"() {
    return require('../module/event.js')
  },
  get "event_del.js"() {
    return require('../module/event_del.js')
  },
  get "event_forward.js"() {
    return require('../module/event_forward.js')
  },
  get "event_privacy.js"() {
    return require('../module/event_privacy.js')
  },
  get "fans_group_detail.js"() {
    return require('../module/fans_group_detail.js')
  },
  get "fans_group_feed_recommend.js"() {
    return require('../module/fans_group_feed_recommend.js')
  },
  get "fans_group_user_group_detail.js"() {
    return require('../module/fans_group_user_group_detail.js')
  },
  get "fans_group_user_groups.js"() {
    return require('../module/fans_group_user_groups.js')
  },
  get "fanscenter_basicinfo_age_get.js"() {
    return require('../module/fanscenter_basicinfo_age_get.js')
  },
  get "fanscenter_basicinfo_gender_get.js"() {
    return require('../module/fanscenter_basicinfo_gender_get.js')
  },
  get "fanscenter_basicinfo_province_get.js"() {
    return require('../module/fanscenter_basicinfo_province_get.js')
  },
  get "fanscenter_overview_get.js"() {
    return require('../module/fanscenter_overview_get.js')
  },
  get "fanscenter_trend_list.js"() {
    return require('../module/fanscenter_trend_list.js')
  },
  get "fm_trash.js"() {
    return require('../module/fm_trash.js')
  },
  get "follow.js"() {
    return require('../module/follow.js')
  },
  get "get_userids.js"() {
    return require('../module/get_userids.js')
  },
  get "history_recommend_songs.js"() {
    return require('../module/history_recommend_songs.js')
  },
  get "history_recommend_songs_detail.js"() {
    return require('../module/history_recommend_songs_detail.js')
  },
  get "homepage_block_page.js"() {
    return require('../module/homepage_block_page.js')
  },
  get "homepage_dragon_ball.js"() {
    return require('../module/homepage_dragon_ball.js')
  },
  get "hot_topic.js"() {
    return require('../module/hot_topic.js')
  },
  get "hug_comment.js"() {
    return require('../module/hug_comment.js')
  },
  get "inner_version.js"() {
    return require('../module/inner_version.js')
  },
  get "lbs_city_code.js"() {
    return require('../module/lbs_city_code.js')
  },
  get "like.js"() {
    return require('../module/like.js')
  },
  get "like_v1.js"() {
    return require('../module/like_v1.js')
  },
  get "likelist.js"() {
    return require('../module/likelist.js')
  },
  get "listen_data_realtime_report.js"() {
    return require('../module/listen_data_realtime_report.js')
  },
  get "listen_data_report.js"() {
    return require('../module/listen_data_report.js')
  },
  get "listen_data_song_play_rank.js"() {
    return require('../module/listen_data_song_play_rank.js')
  },
  get "listen_data_today_song.js"() {
    return require('../module/listen_data_today_song.js')
  },
  get "listen_data_total.js"() {
    return require('../module/listen_data_total.js')
  },
  get "listen_data_year_report.js"() {
    return require('../module/listen_data_year_report.js')
  },
  get "listentogether_accept.js"() {
    return require('../module/listentogether_accept.js')
  },
  get "listentogether_end.js"() {
    return require('../module/listentogether_end.js')
  },
  get "listentogether_heatbeat.js"() {
    return require('../module/listentogether_heatbeat.js')
  },
  get "listentogether_play_command.js"() {
    return require('../module/listentogether_play_command.js')
  },
  get "listentogether_room_check.js"() {
    return require('../module/listentogether_room_check.js')
  },
  get "listentogether_room_create.js"() {
    return require('../module/listentogether_room_create.js')
  },
  get "listentogether_status.js"() {
    return require('../module/listentogether_status.js')
  },
  get "listentogether_sync_list_command.js"() {
    return require('../module/listentogether_sync_list_command.js')
  },
  get "listentogether_sync_playlist_get.js"() {
    return require('../module/listentogether_sync_playlist_get.js')
  },
  get "login.js"() {
    return require('../module/login.js')
  },
  get "login_cellphone.js"() {
    return require('../module/login_cellphone.js')
  },
  get "login_qr_check.js"() {
    return require('../module/login_qr_check.js')
  },
  get "login_qr_create.js"() {
    return require('../module/login_qr_create.js')
  },
  get "login_qr_key.js"() {
    return require('../module/login_qr_key.js')
  },
  get "login_refresh.js"() {
    return require('../module/login_refresh.js')
  },
  get "login_status.js"() {
    return require('../module/login_status.js')
  },
  get "logout.js"() {
    return require('../module/logout.js')
  },
  get "lyric.js"() {
    return require('../module/lyric.js')
  },
  get "lyric_new.js"() {
    return require('../module/lyric_new.js')
  },
  get "middle_play_do_lottery.js"() {
    return require('../module/middle_play_do_lottery.js')
  },
  get "middle_play_lottery_remain_chance.js"() {
    return require('../module/middle_play_lottery_remain_chance.js')
  },
  get "mlog_music_rcmd.js"() {
    return require('../module/mlog_music_rcmd.js')
  },
  get "mlog_to_video.js"() {
    return require('../module/mlog_to_video.js')
  },
  get "mlog_url.js"() {
    return require('../module/mlog_url.js')
  },
  get "msg_comments.js"() {
    return require('../module/msg_comments.js')
  },
  get "msg_forwards.js"() {
    return require('../module/msg_forwards.js')
  },
  get "msg_notices.js"() {
    return require('../module/msg_notices.js')
  },
  get "msg_private.js"() {
    return require('../module/msg_private.js')
  },
  get "msg_private_history.js"() {
    return require('../module/msg_private_history.js')
  },
  get "msg_recentcontact.js"() {
    return require('../module/msg_recentcontact.js')
  },
  get "music_first_listen_info.js"() {
    return require('../module/music_first_listen_info.js')
  },
  get "musician_cloudbean.js"() {
    return require('../module/musician_cloudbean.js')
  },
  get "musician_cloudbean_obtain.js"() {
    return require('../module/musician_cloudbean_obtain.js')
  },
  get "musician_data_overview.js"() {
    return require('../module/musician_data_overview.js')
  },
  get "musician_play_trend.js"() {
    return require('../module/musician_play_trend.js')
  },
  get "musician_sign.js"() {
    return require('../module/musician_sign.js')
  },
  get "musician_tasks.js"() {
    return require('../module/musician_tasks.js')
  },
  get "musician_tasks_new.js"() {
    return require('../module/musician_tasks_new.js')
  },
  get "musician_vip_tasks.js"() {
    return require('../module/musician_vip_tasks.js')
  },
  get "mv_all.js"() {
    return require('../module/mv_all.js')
  },
  get "mv_detail.js"() {
    return require('../module/mv_detail.js')
  },
  get "mv_detail_info.js"() {
    return require('../module/mv_detail_info.js')
  },
  get "mv_exclusive_rcmd.js"() {
    return require('../module/mv_exclusive_rcmd.js')
  },
  get "mv_first.js"() {
    return require('../module/mv_first.js')
  },
  get "mv_sub.js"() {
    return require('../module/mv_sub.js')
  },
  get "mv_sublist.js"() {
    return require('../module/mv_sublist.js')
  },
  get "mv_url.js"() {
    return require('../module/mv_url.js')
  },
  get "nickname_check.js"() {
    return require('../module/nickname_check.js')
  },
  get "personal_fm.js"() {
    return require('../module/personal_fm.js')
  },
  get "personal_fm_mode.js"() {
    return require('../module/personal_fm_mode.js')
  },
  get "personalized.js"() {
    return require('../module/personalized.js')
  },
  get "personalized_djprogram.js"() {
    return require('../module/personalized_djprogram.js')
  },
  get "personalized_mv.js"() {
    return require('../module/personalized_mv.js')
  },
  get "personalized_newsong.js"() {
    return require('../module/personalized_newsong.js')
  },
  get "personalized_privatecontent.js"() {
    return require('../module/personalized_privatecontent.js')
  },
  get "personalized_privatecontent_list.js"() {
    return require('../module/personalized_privatecontent_list.js')
  },
  get "pl_count.js"() {
    return require('../module/pl_count.js')
  },
  get "playlist_category_list.js"() {
    return require('../module/playlist_category_list.js')
  },
  get "playlist_catlist.js"() {
    return require('../module/playlist_catlist.js')
  },
  get "playlist_cover_update.js"() {
    return require('../module/playlist_cover_update.js')
  },
  get "playlist_create.js"() {
    return require('../module/playlist_create.js')
  },
  get "playlist_delete.js"() {
    return require('../module/playlist_delete.js')
  },
  get "playlist_desc_update.js"() {
    return require('../module/playlist_desc_update.js')
  },
  get "playlist_detail.js"() {
    return require('../module/playlist_detail.js')
  },
  get "playlist_detail_dynamic.js"() {
    return require('../module/playlist_detail_dynamic.js')
  },
  get "playlist_detail_rcmd_get.js"() {
    return require('../module/playlist_detail_rcmd_get.js')
  },
  get "playlist_highquality_tags.js"() {
    return require('../module/playlist_highquality_tags.js')
  },
  get "playlist_hot.js"() {
    return require('../module/playlist_hot.js')
  },
  get "playlist_import_name_task_create.js"() {
    return require('../module/playlist_import_name_task_create.js')
  },
  get "playlist_import_task_status.js"() {
    return require('../module/playlist_import_task_status.js')
  },
  get "playlist_mylike.js"() {
    return require('../module/playlist_mylike.js')
  },
  get "playlist_name_update.js"() {
    return require('../module/playlist_name_update.js')
  },
  get "playlist_order_update.js"() {
    return require('../module/playlist_order_update.js')
  },
  get "playlist_privacy.js"() {
    return require('../module/playlist_privacy.js')
  },
  get "playlist_subscribe.js"() {
    return require('../module/playlist_subscribe.js')
  },
  get "playlist_subscribers.js"() {
    return require('../module/playlist_subscribers.js')
  },
  get "playlist_tags_update.js"() {
    return require('../module/playlist_tags_update.js')
  },
  get "playlist_track_add.js"() {
    return require('../module/playlist_track_add.js')
  },
  get "playlist_track_all.js"() {
    return require('../module/playlist_track_all.js')
  },
  get "playlist_track_delete.js"() {
    return require('../module/playlist_track_delete.js')
  },
  get "playlist_tracks.js"() {
    return require('../module/playlist_tracks.js')
  },
  get "playlist_update.js"() {
    return require('../module/playlist_update.js')
  },
  get "playlist_update_playcount.js"() {
    return require('../module/playlist_update_playcount.js')
  },
  get "playlist_video_recent.js"() {
    return require('../module/playlist_video_recent.js')
  },
  get "playmode_intelligence_list.js"() {
    return require('../module/playmode_intelligence_list.js')
  },
  get "playmode_song_vector.js"() {
    return require('../module/playmode_song_vector.js')
  },
  get "program_recommend.js"() {
    return require('../module/program_recommend.js')
  },
  get "radio_sport_get.js"() {
    return require('../module/radio_sport_get.js')
  },
  get "rebind.js"() {
    return require('../module/rebind.js')
  },
  get "recent_listen_list.js"() {
    return require('../module/recent_listen_list.js')
  },
  get "recommend_category_configs.js"() {
    return require('../module/recommend_category_configs.js')
  },
  get "recommend_category_set.js"() {
    return require('../module/recommend_category_set.js')
  },
  get "recommend_category_songs.js"() {
    return require('../module/recommend_category_songs.js')
  },
  get "recommend_resource.js"() {
    return require('../module/recommend_resource.js')
  },
  get "recommend_songs.js"() {
    return require('../module/recommend_songs.js')
  },
  get "recommend_songs_dislike.js"() {
    return require('../module/recommend_songs_dislike.js')
  },
  get "recommend_songs_v1.js"() {
    return require('../module/recommend_songs_v1.js')
  },
  get "record_recent_album.js"() {
    return require('../module/record_recent_album.js')
  },
  get "record_recent_dj.js"() {
    return require('../module/record_recent_dj.js')
  },
  get "record_recent_playlist.js"() {
    return require('../module/record_recent_playlist.js')
  },
  get "record_recent_song.js"() {
    return require('../module/record_recent_song.js')
  },
  get "record_recent_video.js"() {
    return require('../module/record_recent_video.js')
  },
  get "record_recent_voice.js"() {
    return require('../module/record_recent_voice.js')
  },
  get "register_anonimous.js"() {
    return require('../module/register_anonimous.js')
  },
  get "register_cellphone.js"() {
    return require('../module/register_cellphone.js')
  },
  get "register_checktoken_v2.js"() {
    return require('../module/register_checktoken_v2.js')
  },
  get "register_checktoken_v3.js"() {
    return require('../module/register_checktoken_v3.js')
  },
  get "register_neapikey.js"() {
    return require('../module/register_neapikey.js')
  },
  get "register_xeapikey.js"() {
    return require('../module/register_xeapikey.js')
  },
  get "related_allvideo.js"() {
    return require('../module/related_allvideo.js')
  },
  get "related_playlist.js"() {
    return require('../module/related_playlist.js')
  },
  get "relay_play_state_submit.js"() {
    return require('../module/relay_play_state_submit.js')
  },
  get "rep_ugc_activity_collect.js"() {
    return require('../module/rep_ugc_activity_collect.js')
  },
  get "rep_ugc_activity_get.js"() {
    return require('../module/rep_ugc_activity_get.js')
  },
  get "rep_ugc_exam_info_get.js"() {
    return require('../module/rep_ugc_exam_info_get.js')
  },
  get "rep_ugc_exam_question_single_get.js"() {
    return require('../module/rep_ugc_exam_question_single_get.js')
  },
  get "rep_ugc_exam_result_get.js"() {
    return require('../module/rep_ugc_exam_result_get.js')
  },
  get "rep_ugc_exam_start.js"() {
    return require('../module/rep_ugc_exam_start.js')
  },
  get "rep_ugc_exam_submit.js"() {
    return require('../module/rep_ugc_exam_submit.js')
  },
  get "rep_ugc_user_collect-vip.js"() {
    return require('../module/rep_ugc_user_collect-vip.js')
  },
  get "rep_ugc_user_get.js"() {
    return require('../module/rep_ugc_user_get.js')
  },
  get "rep_ugc_user_sign.js"() {
    return require('../module/rep_ugc_user_sign.js')
  },
  get "rep_ugc_user_vip.js"() {
    return require('../module/rep_ugc_user_vip.js')
  },
  get "resource_like.js"() {
    return require('../module/resource_like.js')
  },
  get "sati_resource_list.js"() {
    return require('../module/sati_resource_list.js')
  },
  get "sati_resource_list_more.js"() {
    return require('../module/sati_resource_list_more.js')
  },
  get "sati_resource_sub.js"() {
    return require('../module/sati_resource_sub.js')
  },
  get "sati_resource_sub_list.js"() {
    return require('../module/sati_resource_sub_list.js')
  },
  get "sati_tag_list.js"() {
    return require('../module/sati_tag_list.js')
  },
  get "sati_timescene_resources_get.js"() {
    return require('../module/sati_timescene_resources_get.js')
  },
  get "scrobble.js"() {
    return require('../module/scrobble.js')
  },
  get "scrobble_v1.js"() {
    return require('../module/scrobble_v1.js')
  },
  get "search.js"() {
    return require('../module/search.js')
  },
  get "search_default.js"() {
    return require('../module/search_default.js')
  },
  get "search_hot.js"() {
    return require('../module/search_hot.js')
  },
  get "search_hot_detail.js"() {
    return require('../module/search_hot_detail.js')
  },
  get "search_match.js"() {
    return require('../module/search_match.js')
  },
  get "search_multimatch.js"() {
    return require('../module/search_multimatch.js')
  },
  get "search_suggest.js"() {
    return require('../module/search_suggest.js')
  },
  get "search_suggest_pc.js"() {
    return require('../module/search_suggest_pc.js')
  },
  get "send_album.js"() {
    return require('../module/send_album.js')
  },
  get "send_playlist.js"() {
    return require('../module/send_playlist.js')
  },
  get "send_song.js"() {
    return require('../module/send_song.js')
  },
  get "send_text.js"() {
    return require('../module/send_text.js')
  },
  get "setting.js"() {
    return require('../module/setting.js')
  },
  get "share_resource.js"() {
    return require('../module/share_resource.js')
  },
  get "sheet_list.js"() {
    return require('../module/sheet_list.js')
  },
  get "sheet_preview.js"() {
    return require('../module/sheet_preview.js')
  },
  get "sign_happy_info.js"() {
    return require('../module/sign_happy_info.js')
  },
  get "signin_progress.js"() {
    return require('../module/signin_progress.js')
  },
  get "simi_artist.js"() {
    return require('../module/simi_artist.js')
  },
  get "simi_mv.js"() {
    return require('../module/simi_mv.js')
  },
  get "simi_playlist.js"() {
    return require('../module/simi_playlist.js')
  },
  get "simi_song.js"() {
    return require('../module/simi_song.js')
  },
  get "simi_user.js"() {
    return require('../module/simi_user.js')
  },
  get "song_chorus.js"() {
    return require('../module/song_chorus.js')
  },
  get "song_cloud_download.js"() {
    return require('../module/song_cloud_download.js')
  },
  get "song_copyright_rcmd.js"() {
    return require('../module/song_copyright_rcmd.js')
  },
  get "song_creators.js"() {
    return require('../module/song_creators.js')
  },
  get "song_detail.js"() {
    return require('../module/song_detail.js')
  },
  get "song_downlist.js"() {
    return require('../module/song_downlist.js')
  },
  get "song_download_url.js"() {
    return require('../module/song_download_url.js')
  },
  get "song_download_url_v1.js"() {
    return require('../module/song_download_url_v1.js')
  },
  get "song_dynamic_cover.js"() {
    return require('../module/song_dynamic_cover.js')
  },
  get "song_like.js"() {
    return require('../module/song_like.js')
  },
  get "song_like_check.js"() {
    return require('../module/song_like_check.js')
  },
  get "song_lyrics_mark.js"() {
    return require('../module/song_lyrics_mark.js')
  },
  get "song_lyrics_mark_add.js"() {
    return require('../module/song_lyrics_mark_add.js')
  },
  get "song_lyrics_mark_del.js"() {
    return require('../module/song_lyrics_mark_del.js')
  },
  get "song_lyrics_mark_user_page.js"() {
    return require('../module/song_lyrics_mark_user_page.js')
  },
  get "song_monthdownlist.js"() {
    return require('../module/song_monthdownlist.js')
  },
  get "song_music_detail.js"() {
    return require('../module/song_music_detail.js')
  },
  get "song_order_update.js"() {
    return require('../module/song_order_update.js')
  },
  get "song_purchased.js"() {
    return require('../module/song_purchased.js')
  },
  get "song_red_count.js"() {
    return require('../module/song_red_count.js')
  },
  get "song_simi_get.js"() {
    return require('../module/song_simi_get.js')
  },
  get "song_singledownlist.js"() {
    return require('../module/song_singledownlist.js')
  },
  get "song_url.js"() {
    return require('../module/song_url.js')
  },
  get "song_url_match.js"() {
    return require('../module/song_url_match.js')
  },
  get "song_url_ncmget.js"() {
    return require('../module/song_url_ncmget.js')
  },
  get "song_url_v1.js"() {
    return require('../module/song_url_v1.js')
  },
  get "song_url_v1_302.js"() {
    return require('../module/song_url_v1_302.js')
  },
  get "song_wiki_info.js"() {
    return require('../module/song_wiki_info.js')
  },
  get "song_wiki_summary.js"() {
    return require('../module/song_wiki_summary.js')
  },
  get "starpick_comments_summary.js"() {
    return require('../module/starpick_comments_summary.js')
  },
  get "style_album.js"() {
    return require('../module/style_album.js')
  },
  get "style_artist.js"() {
    return require('../module/style_artist.js')
  },
  get "style_detail.js"() {
    return require('../module/style_detail.js')
  },
  get "style_list.js"() {
    return require('../module/style_list.js')
  },
  get "style_playlist.js"() {
    return require('../module/style_playlist.js')
  },
  get "style_preference.js"() {
    return require('../module/style_preference.js')
  },
  get "style_song.js"() {
    return require('../module/style_song.js')
  },
  get "summary_annual.js"() {
    return require('../module/summary_annual.js')
  },
  get "thinktank_audit_resource_detail.js"() {
    return require('../module/thinktank_audit_resource_detail.js')
  },
  get "thinktank_audit_resource_update.js"() {
    return require('../module/thinktank_audit_resource_update.js')
  },
  get "threshold_detail_get.js"() {
    return require('../module/threshold_detail_get.js')
  },
  get "top_album.js"() {
    return require('../module/top_album.js')
  },
  get "top_artists.js"() {
    return require('../module/top_artists.js')
  },
  get "top_list.js"() {
    return require('../module/top_list.js')
  },
  get "top_mv.js"() {
    return require('../module/top_mv.js')
  },
  get "top_playlist.js"() {
    return require('../module/top_playlist.js')
  },
  get "top_playlist_highquality.js"() {
    return require('../module/top_playlist_highquality.js')
  },
  get "top_song.js"() {
    return require('../module/top_song.js')
  },
  get "topic_detail.js"() {
    return require('../module/topic_detail.js')
  },
  get "topic_detail_event_hot.js"() {
    return require('../module/topic_detail_event_hot.js')
  },
  get "topic_sublist.js"() {
    return require('../module/topic_sublist.js')
  },
  get "toplist.js"() {
    return require('../module/toplist.js')
  },
  get "toplist_artist.js"() {
    return require('../module/toplist_artist.js')
  },
  get "toplist_detail.js"() {
    return require('../module/toplist_detail.js')
  },
  get "toplist_detail_v2.js"() {
    return require('../module/toplist_detail_v2.js')
  },
  get "ugc_album_get.js"() {
    return require('../module/ugc_album_get.js')
  },
  get "ugc_artist_get.js"() {
    return require('../module/ugc_artist_get.js')
  },
  get "ugc_artist_search.js"() {
    return require('../module/ugc_artist_search.js')
  },
  get "ugc_detail.js"() {
    return require('../module/ugc_detail.js')
  },
  get "ugc_mv_get.js"() {
    return require('../module/ugc_mv_get.js')
  },
  get "ugc_song_get.js"() {
    return require('../module/ugc_song_get.js')
  },
  get "ugc_user_devote.js"() {
    return require('../module/ugc_user_devote.js')
  },
  get "user_account.js"() {
    return require('../module/user_account.js')
  },
  get "user_audio.js"() {
    return require('../module/user_audio.js')
  },
  get "user_binding.js"() {
    return require('../module/user_binding.js')
  },
  get "user_bindingcellphone.js"() {
    return require('../module/user_bindingcellphone.js')
  },
  get "user_cloud.js"() {
    return require('../module/user_cloud.js')
  },
  get "user_cloud_del.js"() {
    return require('../module/user_cloud_del.js')
  },
  get "user_cloud_detail.js"() {
    return require('../module/user_cloud_detail.js')
  },
  get "user_comment_history.js"() {
    return require('../module/user_comment_history.js')
  },
  get "user_detail.js"() {
    return require('../module/user_detail.js')
  },
  get "user_detail_new.js"() {
    return require('../module/user_detail_new.js')
  },
  get "user_dj.js"() {
    return require('../module/user_dj.js')
  },
  get "user_event.js"() {
    return require('../module/user_event.js')
  },
  get "user_event_all.js"() {
    return require('../module/user_event_all.js')
  },
  get "user_follow_mixed.js"() {
    return require('../module/user_follow_mixed.js')
  },
  get "user_followeds.js"() {
    return require('../module/user_followeds.js')
  },
  get "user_follows.js"() {
    return require('../module/user_follows.js')
  },
  get "user_level.js"() {
    return require('../module/user_level.js')
  },
  get "user_medal.js"() {
    return require('../module/user_medal.js')
  },
  get "user_mutualfollow_get.js"() {
    return require('../module/user_mutualfollow_get.js')
  },
  get "user_playlist.js"() {
    return require('../module/user_playlist.js')
  },
  get "user_playlist_collect.js"() {
    return require('../module/user_playlist_collect.js')
  },
  get "user_playlist_create.js"() {
    return require('../module/user_playlist_create.js')
  },
  get "user_record.js"() {
    return require('../module/user_record.js')
  },
  get "user_replacephone.js"() {
    return require('../module/user_replacephone.js')
  },
  get "user_social_status.js"() {
    return require('../module/user_social_status.js')
  },
  get "user_social_status_edit.js"() {
    return require('../module/user_social_status_edit.js')
  },
  get "user_social_status_rcmd.js"() {
    return require('../module/user_social_status_rcmd.js')
  },
  get "user_social_status_support.js"() {
    return require('../module/user_social_status_support.js')
  },
  get "user_subcount.js"() {
    return require('../module/user_subcount.js')
  },
  get "user_update.js"() {
    return require('../module/user_update.js')
  },
  get "verify_getQr.js"() {
    return require('../module/verify_getQr.js')
  },
  get "verify_qrcodestatus.js"() {
    return require('../module/verify_qrcodestatus.js')
  },
  get "video_category_list.js"() {
    return require('../module/video_category_list.js')
  },
  get "video_detail.js"() {
    return require('../module/video_detail.js')
  },
  get "video_detail_info.js"() {
    return require('../module/video_detail_info.js')
  },
  get "video_group.js"() {
    return require('../module/video_group.js')
  },
  get "video_group_list.js"() {
    return require('../module/video_group_list.js')
  },
  get "video_sub.js"() {
    return require('../module/video_sub.js')
  },
  get "video_timeline_all.js"() {
    return require('../module/video_timeline_all.js')
  },
  get "video_timeline_recommend.js"() {
    return require('../module/video_timeline_recommend.js')
  },
  get "video_url.js"() {
    return require('../module/video_url.js')
  },
  get "vip_growthpoint.js"() {
    return require('../module/vip_growthpoint.js')
  },
  get "vip_growthpoint_details.js"() {
    return require('../module/vip_growthpoint_details.js')
  },
  get "vip_growthpoint_get.js"() {
    return require('../module/vip_growthpoint_get.js')
  },
  get "vip_growthpoint_getall.js"() {
    return require('../module/vip_growthpoint_getall.js')
  },
  get "vip_info.js"() {
    return require('../module/vip_info.js')
  },
  get "vip_info_v2.js"() {
    return require('../module/vip_info_v2.js')
  },
  get "vip_sign.js"() {
    return require('../module/vip_sign.js')
  },
  get "vip_sign_detail.js"() {
    return require('../module/vip_sign_detail.js')
  },
  get "vip_sign_history.js"() {
    return require('../module/vip_sign_history.js')
  },
  get "vip_sign_info.js"() {
    return require('../module/vip_sign_info.js')
  },
  get "vip_tasks.js"() {
    return require('../module/vip_tasks.js')
  },
  get "vip_tasks_v1.js"() {
    return require('../module/vip_tasks_v1.js')
  },
  get "vip_timemachine.js"() {
    return require('../module/vip_timemachine.js')
  },
  get "voice_delete.js"() {
    return require('../module/voice_delete.js')
  },
  get "voice_detail.js"() {
    return require('../module/voice_detail.js')
  },
  get "voice_lyric.js"() {
    return require('../module/voice_lyric.js')
  },
  get "voice_upload.js"() {
    return require('../module/voice_upload.js')
  },
  get "voicelist_detail.js"() {
    return require('../module/voicelist_detail.js')
  },
  get "voicelist_list.js"() {
    return require('../module/voicelist_list.js')
  },
  get "voicelist_list_search.js"() {
    return require('../module/voicelist_list_search.js')
  },
  get "voicelist_my_created.js"() {
    return require('../module/voicelist_my_created.js')
  },
  get "voicelist_search.js"() {
    return require('../module/voicelist_search.js')
  },
  get "voicelist_trans.js"() {
    return require('../module/voicelist_trans.js')
  },
  get "weblog.js"() {
    return require('../module/weblog.js')
  },
  get "yunbei.js"() {
    return require('../module/yunbei.js')
  },
  get "yunbei_expense.js"() {
    return require('../module/yunbei_expense.js')
  },
  get "yunbei_info.js"() {
    return require('../module/yunbei_info.js')
  },
  get "yunbei_rcmd_song.js"() {
    return require('../module/yunbei_rcmd_song.js')
  },
  get "yunbei_rcmd_song_history.js"() {
    return require('../module/yunbei_rcmd_song_history.js')
  },
  get "yunbei_receipt.js"() {
    return require('../module/yunbei_receipt.js')
  },
  get "yunbei_sign.js"() {
    return require('../module/yunbei_sign.js')
  },
  get "yunbei_task_finish.js"() {
    return require('../module/yunbei_task_finish.js')
  },
  get "yunbei_task_finish_v1.js"() {
    return require('../module/yunbei_task_finish_v1.js')
  },
  get "yunbei_task_list_v1.js"() {
    return require('../module/yunbei_task_list_v1.js')
  },
  get "yunbei_task_recommend_song.js"() {
    return require('../module/yunbei_task_recommend_song.js')
  },
  get "yunbei_tasks.js"() {
    return require('../module/yunbei_tasks.js')
  },
  get "yunbei_tasks_todo.js"() {
    return require('../module/yunbei_tasks_todo.js')
  },
  get "yunbei_today.js"() {
    return require('../module/yunbei_today.js')
  },
}

const special = {
  'daily_signin.js': '/daily_signin',
  'fm_trash.js': '/fm_trash',
  'personal_fm.js': '/personal_fm',
}

// 与 server.js 中 getModulesDefinitions 的路由规则保持一致
// module 属性同样是懒加载（继承自 files 的 getter）
const moduleDefs = Object.keys(files)
  .reverse()
  .map((file) => ({
    identifier: file.split('.').shift(),
    route:
      special[file] || '/' + file.replace(/\.js$/i, '').replace(/_/g, '/'),
    get module() {
      return files[file]
    },
  }))

module.exports = { files, moduleDefs }
