<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = $_POST['title'] ?? '';
    $description = $_POST['description'] ?? '';
    $link = $_POST['link'] ?? '';
    $type = $_POST['type'] ?? '';
    $subject = $_POST['subject'] ?? '';
    $contact = $_POST['contact'] ?? '';

    if ($title && $description && $link && $type && $subject && $contact) {
        $file = 'resources.json';
        $resources = [];

        if (file_exists($file)) {
            $resources = json_decode(file_get_contents($file), true) ?? [];
        }

        $resources[] = [
            'title' => $title,
            'description' => $description,
            'link' => $link,
            'type' => $type,
            'subject' => $subject,
            'contact' => $contact
        ];

        file_put_contents($file, json_encode($resources, JSON_PRETTY_PRINT));
    }
    echo json_encode(['status' => 'success']);
}
?>
