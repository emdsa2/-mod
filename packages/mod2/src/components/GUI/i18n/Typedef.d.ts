type TextTag =
    'General::Delete' | 'General::Save' | 'General::Setting'
    | 'Setting::Main::CustomActTile' | 'Setting::Main::CustomAssetTitle' | 'Setting::Main::MiscTitle'
    | 'Setting::Main::DiscordHover'
    | 'Setting::Act::NoMore'
    | 'Setting::Act::DeleteExisting' | 'Setting::Act::DeleteAll'
    | 'Setting::Act::Act'
    | 'Setting::Act::Name' | 'Setting::Act::Target'
    | 'Setting::Act::Save::NeedBodyArea' | 'Setting::Act::Save::NeedActName' | 'Setting::Act::Save::ActExisted'
    | 'Setting::Act::Target::Self' | 'Setting::Act::Target::Other' | 'Setting::Act::Target::Both'
    | 'Setting::Act::BodyGroup' | 'Setting::Act::BodyGroup::Unset'
    | 'Setting::Act::Text::TextSelf' | 'Setting::Act::Text::TextOther'
    | 'Setting::Misc::KeepArousal' | 'Setting::Misc::ClearArousal'
    | 'Setting::Misc::SaveCrafting' | 'Setting::Misc::LoadCrafting';