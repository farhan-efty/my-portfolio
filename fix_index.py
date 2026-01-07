import os

file_path = r'C:\Website\my-portfolio\index.html'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find the start and end of the block
start_idx = -1
end_idx = -1

for i, line in enumerate(lines):
    if 'Organized technical seminars, webinars, and member engagement sessions' in line and '<ul' not in line:
         # Found the first list item content, so the UL start should be a few lines back
         # Looking for the UL tag before this line
         for j in range(i, i-5, -1):
             if '<ul' in lines[j] and 'list-disc' in lines[j]:
                 start_idx = j
                 break
         if start_idx != -1:
             break

for i in range(start_idx, len(lines)):
    if 'Supported volunteer onboarding' in line:
         # Found the last item
         pass
    if start_idx != -1 and i > start_idx and '</ul>' in lines[i]:
        # This might be the closing UL.
        # But wait, the original file has `</ul>li>` at line ~980.
        # Let's just find the `</ul>` that closes this block.
        # The block ends after "Supported volunteer onboarding".
        pass

# Harder approach: Search for specific signature lines
# Start signature: line containing "Vice Chair" (around 959) -> then finding the next <ul>
# End signature: line containing "Assistant Organizing Secretary" (around 975 in next block) -> no, just finding the </ul> after "Supported volunteer onboarding"

new_content = """                                        <ul
                                            class="mt-4 space-y-2 text-slate-600 dark:text-slate-300 list-none">
                                            <li class="flex items-start gap-2"><i class="fa-solid fa-circle-check text-blue-600 mt-1 shrink-0"></i><span>Organized technical seminars, webinars, and member engagement sessions
                                                under
                                                IEEE PES.</span></li>
                                            <li class="flex items-start gap-2"><i class="fa-solid fa-circle-check text-blue-600 mt-1 shrink-0"></i><span>Contributed to securing the <strong>High-Performance Student Branch
                                                    Chapter
                                                    Award</strong>.</span></li>
                                            <li class="flex items-start gap-2"><i class="fa-solid fa-circle-check text-blue-600 mt-1 shrink-0"></i><span>Served as IEEE PES Day Ambassador and managed chapter social media
                                                presence.</span></li>
                                            <li class="flex items-start gap-2"><i class="fa-solid fa-circle-check text-blue-600 mt-1 shrink-0"></i><span>Executed joint programs with other SB chapters to promote power & energy
                                                topics.</span></li>
                                            <li class="flex items-start gap-2"><i class="fa-solid fa-circle-check text-blue-600 mt-1 shrink-0"></i><span>Supported volunteer onboarding and role-specific training for new
                                                coordinators.</span></li>
                                        </ul>
"""

# Let's locate by lines using known unique strings
start_line_marker = 'Organized technical seminars'
end_line_marker = 'Supported volunteer onboarding'

real_start = -1
real_end = -1

for i, line in enumerate(lines):
    if start_line_marker in line:
        # The UL is likely 2 lines above
        if '<ul' in lines[i-2]:
            real_start = i-2
        elif '<ul' in lines[i-1]:
            real_start = i-1
    
    if end_line_marker in line:
        # The UL close is likely 1-2 lines after
        # Look ahead
        for k in range(1, 5):
            if i+k < len(lines) and '</ul>' in lines[i+k]:
                real_end = i+k
                break
        if real_end != -1:
            break

if real_start != -1 and real_end != -1:
    print(f"Replacing lines {real_start+1} to {real_end+1}")
    # Replace
    lines[real_start:real_end+1] = [new_content]
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print("Successfully replaced content.")
else:
    print("Could not locate the block.")
    print(f"Start found: {real_start}")
    print(f"End found: {real_end}")

